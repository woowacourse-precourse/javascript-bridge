const BridgeController = require('./BridgeController');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {
    const views = {
      inputView: InputView,
      outputView: OutputView
    }

    new BridgeController(views);
  }
}

module.exports = App;
