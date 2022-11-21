const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { validateReadBridgeSize } = require('./Validate');

class App {
  play() {
    OutputView.printStart();
    InputView.readBridgeSize(validateReadBridgeSize);
  }
}

const app = new App();
app.play();
module.exports = App;
