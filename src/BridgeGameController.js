const Validate = require('./utils/validation');
const InputView = require('./Viewer/InputView');
const OutputView = require('./Viewer/OutputView');
const BridgeGame = require('./BridgeGame');
const { ERROR } = require('./constants/messages');
const { STATUS } = require('./constants/values');
const { KEYS } = require('./constants/keys');

class BridgeGameController {
  #inputView;
  #outputView;
  #bridgeGame;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
    this.initiate();
  }
  initiate() {
    this.#outputView.printStart();
    this.#getUserInputBridgeSize();
  }

  #getUserInputBridgeSize() {
    this.#inputView.readBridgeSize((input) => {
      this.#handleBridgeSizeException(input);
    });
  }

  #getUserInputMoving(game) {
    this.#inputView.readMoving((input) => {
      this.#handleMovingException(input, game);
    });
  }

  #getUserInputGameCommand(game) {
    this.#inputView.readGameCommand((input) => {
      this.#handleGameCommandException(input, game);
    });
  }

  #handleBridgeSizeException(input) {
    try {
      Validate.userInputSize(input);
      const size = Number(input);
      this.#bridgeGame = new BridgeGame(size);
      this.#getUserInputMoving(this.#bridgeGame);
    } catch (error) {
      this.#outputView.printError(ERROR.USER_INPUT_BRIDGE_SIZE_INVALID);
      this.#getUserInputBridgeSize();
    }
  }

  #handleMovingException(move, game) {
    try {
      Validate.userInputMove(move);
      const moveResult = game.move(move);
      this.#outputView.printMap(moveResult[0], moveResult[1]);
      this.#handleGameStatus(moveResult[2], game);
    } catch (error) {
      this.#outputView.printError(ERROR.USER_INPUT_MOVING_KEY_INVALID);
      this.#getUserInputMoving(game);
    }
  }

  #handleGameStatus(status, game) {
    this.#handleStatusSuccess(status, game);
    this.#handleStatusFail(status, game);
    this.#handleStatusNext(status, game);
  }

  #handleStatusSuccess(status, game) {
    if (status === STATUS.SUCCESS) {
      this.#outputView.printResult(game);
    }
  }

  #handleStatusFail(status, game) {
    if (status === STATUS.FAIL) {
      this.#getUserInputGameCommand(game);
    }
  }

  #handleStatusNext(status, game) {
    if (status === STATUS.NEXT) {
      this.#getUserInputMoving(game);
    }
  }

  #handleGameCommandException(command, game) {
    try {
      Validate.gameCommand(command);
      this.#handleGameCommand(command, game);
    } catch (error) {
      this.#outputView.printError(ERROR.USER_INPUT_GAME_COMMAND_INVALID);
      this.#getUserInputGameCommand(game);
    }
  }

  #handleGameCommand(command, game) {
    if (command === KEYS.QUIT) {
      this.#outputView.printResult(game);
      return;
    }
    game.retry();
    this.#getUserInputMoving(game);
  }
}

module.exports = BridgeGameController;
