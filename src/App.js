const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");

class App {
  play() {
    this.showGreeting();
  }

  showGreeting() {
    OutputView.printGreeting();
  }

  showInputBridgeNumber() {
    InputView.readBridgeSize((bridgeSize) => {
      // TODO
      // 입력받은 다리크기로 BridgeGame 을 생성한다.
      this.showInputMoveCommand();
    });
  }

  showInputMoveCommand() {
    InputView.readGameCommand((command) => {
      // TODO
      // 다리를 건널 수 있다면 다리를 건넌다.
      // 다리를 건널 수 없다면 this.showInputRetry()를 호출한다.
    });
  }

  showInputRetry() {
    InputView.readGameCommand((command) => {
      // command에 따라서 게임을 재시작하거나 종료한다.
    });
  }
}

module.exports = App;
