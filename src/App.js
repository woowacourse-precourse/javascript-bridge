const InputView = require("../src/InputView");
const { Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    try {
      InputView.readBridgeSize();
    } catch (error) {
      return this.executeError(error);
    }
  }

  executeError(error) {
    Console.print(error.message);
    const after = {
      "3-20": () => InputView.readBridgeSize(),
      "U-D": () => InputView.readMoving(),
      "R-Q": () => InputView.readGameCommand(),
    };
    after[error.kind]() || "";
  }
}
module.exports = App;
