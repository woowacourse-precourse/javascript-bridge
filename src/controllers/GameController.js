const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');

const BridgeGame = require('../models/BridgeGame');
const {
  validate,
  isBridgeSize,
  isMovingInput,
  isCommandInput,
} = require('../Validator');

const MapGenerator = require('../models/MapGenerator');

class GameContoller {
  #bridgeGame;

  #gameStatusMap = {
    PLAYING: this.inputMoving.bind(this),
    FAIL: this.inputGameCommand.bind(this),
    CLEAR: this.onGameOver.bind(this, '성공'),
  };

  start() {
    OutputView.printStarting();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize((size) => {
      try {
        this.onInputBridgeSize(size);
      } catch (error) {
        OutputView.printError(error.message);
        this.inputBridgeSize();
      }
    });
  }

  onInputBridgeSize(size) {
    validate(size, isBridgeSize);

    this.#bridgeGame = new BridgeGame(size);

    this.inputMoving();
  }

  inputMoving() {
    InputView.readMoving((moving) => {
      try {
        this.onInputMoving(moving);
      } catch (error) {
        OutputView.printError(error.message);
        this.inputMoving();
      }
    });
  }

  onInputMoving(moving) {
    validate(moving, isMovingInput);

    this.#bridgeGame.move(moving);

    const map = MapGenerator.toString();
    OutputView.printMap(map);

    this.checkGameStatus();
  }

  checkGameStatus() {
    const stateManager = this.#bridgeGame.getStateManager();

    const gameStatus = stateManager.getGameStatus();
    this.#gameStatusMap[gameStatus]();
  }

  inputGameCommand() {
    InputView.readGameCommand((command) => {
      try {
        this.onInputGameCommand(command);
      } catch (error) {
        OutputView.printError(error.message);
        this.inputGameCommand();
      }
    });
  }

  onInputGameCommand(command) {
    validate(command, isCommandInput);

    if (command === 'R') {
      this.onRetryCommand();
      return;
    }

    this.onGameOver('실패');
  }

  onRetryCommand() {
    this.#bridgeGame.retry();

    this.checkGameStatus();
  }

  onGameOver(status) {
    const map = MapGenerator.toString();

    const stateManager = this.#bridgeGame.getStateManager();
    const tryCount = stateManager.getTryCount();

    OutputView.printResult(map, status, tryCount);
  }
}

module.exports = GameContoller;
