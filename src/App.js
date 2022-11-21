const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');
const { Console } = require('@woowacourse/mission-utils');
const validator = require('./utils');
const { ERROR_MESSAGE } = require('./constants');

class App {
  MOVE_TO_FORK_MAP = {
    END: () => {
      OutputView.printResult(this.bridgeGame);
      Console.close();
    },
    NEXT: () => {
      this.requestDirection(this.bridgeGame);
    },
    FAIL: () => {
      this.requestIsTry();
    },
  };

  FAIL_TO_FORK_MAP = {
    Q: () => {
      OutputView.printResult(this.bridgeGame);
      Console.close();
    },
    R: () => {
      this.bridgeGame.retry();
      this.requestDirection();
    },
  };

  play() {
    OutputView.printStart();
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  validateBridgeSize(size) {
    if (validator.isOverSize(size)) {
      throw new Error(ERROR_MESSAGE.SIZE_RANGE);
    }
    if (!validator.isInteger(size)) {
      throw new Error(ERROR_MESSAGE.SIZE_INTEGER);
    }
  }

  makeBridge(response) {
    try {
      this.validateBridgeSize(response);
      this.bridgeGame = new BridgeGame(response);
      this.requestDirection();
    } catch (error) {
      OutputView.printError(error);
      Console.close();
    }
  }

  requestDirection() {
    InputView.readMoving(this.moveUser.bind(this));
  }

  validateMoveCommand(command) {
    if (validator.isNotUorD(command)) {
      throw new Error(ERROR_MESSAGE.OPERATION_MOVE);
    }
  }

  moveUser(response) {
    try {
      this.validateMoveCommand(response);
      this.bridgeGame.move(response).setStaus().setFootprint();
      OutputView.printMap(this.bridgeGame);
      this.MOVE_TO_FORK_MAP[this.bridgeGame.getStatus()]();
    } catch (error) {
      OutputView.printError(error);
      Console.close();
    }
  }

  requestIsTry() {
    InputView.readGameCommand(this.isRetry.bind(this));
  }

  validateGameCommand(command) {
    if (validator.isNotRorQ(command)) {
      throw new Error(ERROR_MESSAGE.OPERATION_GAME_COMMAND);
    }
  }

  isRetry(response) {
    try {
      this.validateGameCommand(response);
      this.FAIL_TO_FORK_MAP[response]();
    } catch (error) {
      OutputView.printError(error);
      Console.close();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
