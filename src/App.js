const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printGameStartMsg();
  }
}

const app = new App();
app.play();

module.exports = App;
