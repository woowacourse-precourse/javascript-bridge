const OutputView = require('./view/OutputView');

class App {
  play() {
    OutputView.printStart();
  }
}

const app = new App();
app.play();

module.exports = App;
