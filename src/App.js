const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  #userGame;

  play() {
    OutputView.printInit();
  }
}

module.exports = App;
