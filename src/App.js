const OutputView = require("../src/OutputView");

class App {
  play() {
    OutputView.printGameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
