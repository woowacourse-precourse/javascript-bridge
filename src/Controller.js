const BridgeGame = require('./Model/BridgeGame');
const { handleError } = require('./ErrorHandler');
const MapMaker = require('./MapMaker');
const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');

class Controller {
  constructor(game = new BridgeGame(), inputView = InputView, outputView = OutputView) {
    this.game = game;
    this.inputView = inputView;
    this.outputView = outputView;
  }

  printMap = () => {
    const mapMaker = new MapMaker(
      this.game.bridgeStore.getUserInputResultLength(),
      this.game.bridgeStore.getUserInputResult,
    );

    this.outputView.printMap(mapMaker);
  };

  fail = () => {
    this.inputView.readGameCommand(this.confirmRetry);
  };

  end = () => {
    const mapMaker = new MapMaker(
      this.game.bridgeStore.getUserInputResultLength(),
      this.game.bridgeStore.getUserInputResult,
    );

    this.outputView.printResult(mapMaker, this.game.bridgeStore.getGameResult());
    this.inputView.close();
  };

  getMoveFailReason = () => {
    const MIN_MOVE_COUNT = 1;
    const REASON = {
      true: 'fail',
      false: 'end',
    };

    return REASON[this.game.isBiggerThanMoveCount(MIN_MOVE_COUNT)];
  };

  retry = () => {
    this.game.bridgeStore.retry();
    this.inputView.readMoving(this.move);
  };

  confirmRetry = handleError(
    (command) => {
      this.game.bridgeValidator.isValidCommand('retry', command);

      const run = {
        R: this.retry,
        Q: this.end,
      };

      run[command]();
    },
  )(() => {
    this.inputView.readGameCommand(this.confirmRetry);
  });

  move = handleError(
    (command) => {
      const isMoved = this.game.move(command);
      this.printMap();
      if (!isMoved) {
        this[this.getMoveFailReason()]();
        return;
      }

      this.inputView.readMoving(this.move);
    },
  )(() => {
    this.inputView.readMoving(this.move);
  });

  runGame = handleError(
    (bridgeSize) => {
      this.game.createBridge(bridgeSize);
      this.inputView.readMoving(this.move);
    }
    ,
  )(() => {
    this.inputView.readBridgeSize(this.runGame);
  });

  init() {
    this.outputView.printWelcomeMessage();
    this.inputView.readBridgeSize(this.runGame);
  }
}

module.exports = Controller;
