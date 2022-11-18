const Bridge = require('./Bridge');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this.makeBridge, this.func2, this.func3);
  }

  makeBridge(input) {
    new Bridge(Number(input));
  }

  func2(input) {
    console.log(input);
  }

  func3(input) {
    console.log(input);
  }
}

const app = new App();
app.play();

module.exports = App;
