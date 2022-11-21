const outputFunction = require('../src/OutputView');
const inputFunction = require('../src/InputView');

class App {
  play() {
    outputFunction.printStart();
    inputFunction.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
