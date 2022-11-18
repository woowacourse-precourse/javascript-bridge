const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printStartMessage();
  }
}

const app = new App();
app.play();

module.exports = App;
