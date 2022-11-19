const OutputView = require('./OutputView');

class App {
  play() {
    OutputView.printInit();
    this.initGame();
  }

  initGame() {

  }
}

const app = new App();
app.play();

module.exports = App;
