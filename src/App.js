const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");
const {Console} = require("@woowacourse/mission-utils");
const validator = require("./utils")

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
  }

  FAIL_TO_FORK_MAP = {
    Q: () => {
      OutputView.printResult();
      Console.close();
    },
    R: () => {
      this.bridgeGame.retry();
      OutputView.clearThread();
      this.requestDirection();
    }
  }

  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.start();
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  makeBridge(response) {
    if (validator.isInteger(response)) {
      throw new Error("[ERROR] 사이즈는 정수여야 합니다.");
    }
    if (validator.isNotSize(response)) {
      throw new Error("[ERROR] 사이즈는 3 ~ 20 사이입니다.");
    }
    this.bridgeGame.setBridge(response);
    this.requestDirection();
  }

  requestDirection() {
    InputView.readMoving(this.moveUser.bind(this));
  }

  moveUser(response) {
    if (validator.isNotUorD(response)) {
      throw new Error("[ERROR] 이동은 U, D만 가능합니다.");
    }
    this.bridgeGame.move(response);
    OutputView.printMap(this.bridgeGame)
    const status = this.bridgeGame.fork();
    this.MOVE_TO_FORK_MAP[status]();
  }

  requestIsTry() {
    InputView.readGameCommand(this.TryOrClose.bind(this));
  }

  TryOrClose(response) {
    if (validator.isNotRorQ(response)) {
      throw new Error("[ERROR] 입력은 R, Q만 가능합니다.");
    }
    this.FAIL_TO_FORK_MAP[response]();
  }
}

const app = new App();
app.play();

module.exports = App;
