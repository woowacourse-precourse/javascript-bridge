const OutputView = require('./view/OutputView');

class App {
  play() {
    OutputView.printGreeting();
  }
}

const app = new App();
app.play();

module.exports = App;
