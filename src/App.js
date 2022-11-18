const OutputView = require('./OutputView');

class App {
  play() {
    OutputView.printStart();
  }
}

module.exports = App;

const app = new App();
app.play();
