const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");
const {Console} = require("@woowacourse/mission-utils");

class App {
  MOVE_TO_FORK_MAP = {
    END: () => {
      Console.close();
    },
    NEXT: () => {
      this.requestDirection();
    },
    FAIL: () => {
      this.requestIsTry();
    },
  }

  FAIL_TO_FORK_MAP = {
    Q: () => {
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
    this.bridgeGame.setBridge(response);
    this.requestDirection();
  }

  requestDirection() {
    InputView.readMoving(this.moveUser.bind(this));
  }

  moveUser(response) {
    this.bridgeGame.move(response);
    OutputView.printMap(this.bridgeGame)
    const status = this.bridgeGame.fork();
    this.MOVE_TO_FORK_MAP[status]();
  }

  requestIsTry() {
    InputView.readGameCommand(this.TryOrClose.bind(this));
  }

  TryOrClose(response) {
    this.FAIL_TO_FORK_MAP[response]();
  }
  

}

const app = new App();
app.play();

module.exports = App;
