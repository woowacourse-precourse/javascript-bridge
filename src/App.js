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
      Console.print(ERROR_MESSAGE.SIZE_RANGE);
      Console.close();
      return;
    }
    if (!validator.isInteger(size)) {
      Console.print(ERROR_MESSAGE.SIZE_INTEGER);
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
      Console.print(ERROR_MESSAGE.OPERATION_MOVE);
      Console.close();
      return;
    }
  }

  moveUser(response) {
    this.validateMoveCommand(response);
    this.bridgeGame.move(response);
    OutputView.printMap(this.bridgeGame);
    const status = this.bridgeGame.fork();
    this.MOVE_TO_FORK_MAP[status]();
  }

  requestIsTry() {
    InputView.readGameCommand(this.TryOrClose.bind(this));
  }

  validateGameCommand(command) {
    if (validator.isNotRorQ(command)) {
      Console.print(ERROR_MESSAGE.OPERATION_GAME_COMMAND);
      Console.close();
      return;
    }
  }

  TryOrClose(response) {
    this.validateGameCommand(response)
    this.FAIL_TO_FORK_MAP[response]();
  }
}

const app = new App();
app.play();

module.exports = App;
