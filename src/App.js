const InputView = require('./InputView');

class App {
  play() {
    InputView.readBridgeSize(this.func1, this.func2, this.func3);
  }

  func1(input) {
    console.log(input);
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
