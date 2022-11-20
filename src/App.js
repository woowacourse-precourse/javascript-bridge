const Output = require("./OutputView");
const Input = require('./InputView');

class App {
  play() {
    Output.startText();
    Input.brigeGameCourse();
  }
}

module.exports = App;
