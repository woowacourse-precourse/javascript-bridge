const Output = require("./OutputView");
const Input = require('./InputView');

class App {
  play() {
    Output.startText();
    Input.bridgeGameCourse();
  }
}

module.exports = App;
