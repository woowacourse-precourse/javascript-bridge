const OutputView = require('./OutputView.js');

class App {
  play() {
    OutputView.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
