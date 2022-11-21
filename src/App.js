const { printGameStart } = require("../src/OutputView");
//const OutputView = require("../src/OutputView");

class App {
  play() {
    printGameStart();
  }
}

module.exports = App;
