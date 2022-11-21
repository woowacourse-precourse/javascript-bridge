const InputView = require("./InputView");
const { Console } = require("@woowacourse/mission-utils");
const { COMMAND } = require("./Constant");
const Bridge = require("./Bridge");

class App {
  play() {
    const bridge = new Bridge();

    Console.print(`${COMMAND.START}`);
    InputView.readBridgeSize(bridge);
  }
}

// module.exports = App;
const app = new App();
app.play();
