const InputView = require("../src/InputView");
const { Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    try {
      InputView.readBridgeSize();
    } catch (error) {
      Console.print(error.message);
      switch (error.kind) {
        case "3-20":
          return InputView.readBridgeSize();
        case "U/D":
          return InputView.readMoving();
        case "R/Q":
          return InputView.readGameCommand();
      }
    }
  }
}

module.exports = App;
