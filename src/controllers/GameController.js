const BridgeGame = require('../models/BridgeGame');
const MapGenerator = require('../models/MapGenerator');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const { COMMAND, GAME_STATUS, STATUS_MESSAGE } = require('../utils/constants');
const {
  validate,
  isBridgeSize,
  isMovingInput,
  isCommandInput,
} = require('../utils/Validator');

class GameContoller {
  #bridgeGame;

  #gameStatusMap = {
    [GAME_STATUS.PLAYING]: this.inputMoving.bind(this),
    [GAME_STATUS.FAIL]: this.inputGameCommand.bind(this),
    [GAME_STATUS.CLEAR]: this.onGameOver.bind(this, STATUS_MESSAGE.CLEAR),
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

    const { gameStatus } = stateManager.getGameState();
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

    if (command === COMMAND.RETRY) {
      this.onRetryCommand();
      return;
    }

    this.onGameOver(STATUS_MESSAGE.FAIL);
  }

  onRetryCommand() {
    this.#bridgeGame.retry();

    this.checkGameStatus();
  }

  onGameOver(status) {
    const map = MapGenerator.toString();

    const stateManager = this.#bridgeGame.getStateManager();
    const { tryCount } = stateManager.getGameState();

    OutputView.printResult(map, status, tryCount);
  }
}

module.exports = GameContoller;
