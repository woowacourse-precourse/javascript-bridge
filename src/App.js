const InputView = require('./InputView');
const { Console } = require("@woowacourse/mission-utils");
const { COMMAND } = require("./Constant");

class App {
  play() {
    Console.print(`${COMMAND.START}`);
    InputView.readBridgeSize();
  }
}

// module.exports = App;
const app = new App();
app.play();