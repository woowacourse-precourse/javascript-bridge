const Bridge = require('./Bridge');
const InputView = require('./InputView');

class App {
  play() {
    InputView.readBridgeSize(this.func1, this.func2, this.func3);
  }

  func1(input) {
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
