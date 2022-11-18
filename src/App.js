const OutputView = require("../src/OutputView");

class App {
  play() {
    OutputView.printStartGame();
  }
}

const app = new App();
app.play();

module.exports = App;
