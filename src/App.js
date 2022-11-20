const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");
const { Console } = require("@woowacourse/mission-utils");
const validator = require("./utils");
const { ERROR_MESSAGE } = require("./constants");

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
      OutputView.clearThread();
      this.requestDirection();
    },
  };

  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printStart();
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  validateBridgeSize(size) {
    if (validator.isOverSize(size)) {
      OutputView.printError(ERROR_MESSAGE.SIZE_RANGE)
      Console.close();
      return;
    }
    if (!validator.isInteger(size)) {
      OutputView.printError(ERROR_MESSAGE.SIZE_INTEGER)
      Console.close();
      return;
    }
  }

  makeBridge(response) {
    this.validateBridgeSize(response);
    this.bridgeGame.setBridge(response);
    this.requestDirection();
  }

  requestDirection() {
    InputView.readMoving(this.moveUser.bind(this));
  }

  validateMoveCommand(command) {
    if (validator.isNotUorD(command)) {
      OutputView.printError(ERROR_MESSAGE.OPERATION_MOVE)
      Console.close();
      return;
    }
  }

  moveUser(response) {
    this.validateMoveCommand(response);
    this.bridgeGame.move(response).setStaus();
    OutputView.printMap(this.bridgeGame);
    this.MOVE_TO_FORK_MAP[this.bridgeGame.getStatus()]();
  }

  requestIsTry() {
    InputView.readGameCommand(this.isRetry.bind(this));
  }

  validateGameCommand(command) {
    if (validator.isNotRorQ(command)) {
      OutputView.printError(ERROR_MESSAGE.OPERATION_GAME_COMMAND)
      Console.close();
      return;
    }
  }

  isRetry(response) {
    this.validateGameCommand(response)
    this.FAIL_TO_FORK_MAP[response]();
  }
}

const app = new App();
app.play();

module.exports = App;
