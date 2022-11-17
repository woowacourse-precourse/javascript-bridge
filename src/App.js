const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.start();
  }
}

const app = new App();
app.play();

module.exports = App;
