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

  makeBridge(response) {
    if (validator.isOverSize(response)) {
      Console.print(ERROR_MESSAGE.SIZE_RANGE);
      Console.close();
      return;
    }
    if (!validator.isInteger(response)) {
      Console.print(ERROR_MESSAGE.SIZE_INTEGER);
      Console.close();
      return;
    }

    this.bridgeGame.setBridge(response);
    this.requestDirection();
  }

  requestDirection() {
    InputView.readMoving(this.moveUser.bind(this));
  }

  moveUser(response) {
    if (validator.isNotUorD(response)) {
      Console.print(ERROR_MESSAGE.OPERATION_MOVE);
      Console.close();
      return;
    }
    this.bridgeGame.move(response);
    OutputView.printMap(this.bridgeGame);
    const status = this.bridgeGame.fork();
    this.MOVE_TO_FORK_MAP[status]();
  }

  requestIsTry() {
    InputView.readGameCommand(this.TryOrClose.bind(this));
  }

  TryOrClose(response) {
    if (validator.isNotRorQ(response)) {
      Console.print(ERROR_MESSAGE.OPERATION_GAME_COMMAND);
      Console.close();
      return;
    }
    this.FAIL_TO_FORK_MAP[response]();
  }
}

const app = new App();
app.play();

module.exports = App;
