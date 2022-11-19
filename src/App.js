const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { GAME_COMMAND_STRING } = require('./constants');

class App {
  #model;

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.#handleSize.bind(this));
  }

  #handleSize(size) {
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#model = new BridgeGame(bridge);
    InputView.readMoving(this.#handleMoving.bind(this));
  }

  #handleMoving(moving) {
    this.#model.move(moving);
    OutputView.printMap(this.#model.getMoveList());
    this.#decideNext();
  }

  #decideNext() {
    const moveList = this.#model.getMoveList();
    const result = moveList[moveList.length - 1].result;

    if (result === false) {
      InputView.readGameCommand(this.#handleGameCommand.bind(this));
    } else if (moveList.length === this.#model.getBridge().length) {
      OutputView.printResult(moveList, this.#model.getTryCount());
    } else {
      InputView.readMoving(this.#handleMoving.bind(this));
    }
  }

  #handleGameCommand(gameCommand) {
    if (gameCommand === GAME_COMMAND_STRING.retry) {
      OutputView.printResult(this.#model.getMoveList(), this.#model.getTryCount());
    } else {
      this.#model.retry();
      InputView.readMoving(this.#handleMoving.bind(this));
    }
  }
}

module.exports = App;
