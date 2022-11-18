const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printGameStartPhrase();
  }
}

const app = new App();
app.play();

module.exports = App;
