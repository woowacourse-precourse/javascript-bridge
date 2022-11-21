const { printGameStart } = require('./OutputView');
const { readBridgeSize } = require('./InputView');

class App {
  play() {
    printGameStart();
    readBridgeSize();
  }
}

module.exports = App;
