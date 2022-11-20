const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
