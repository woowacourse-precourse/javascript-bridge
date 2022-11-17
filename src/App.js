const { printStartMsg } = require('./OutputView.js');
const { requestBridgeSize } = require('./InputView.js');

class App {
  play() {
    printStartMsg();
    requestBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
