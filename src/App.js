const outputViewModule = require('../src/OutputView');
const inputViewModule = require('../src/InputView');

class App {
  play() {
    outputViewModule.printStart();
    inputViewModule.readBridgeSize();
  }
}

module.exports = App;
