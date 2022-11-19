const BridgeGame = require('./BridgeGame');
const BridgeModel = require('./BridgeModel');
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Validator = require('./Validator');

class App {
  play() {
    const models = {
      bridgeModel: new BridgeModel(),
      bridgeRandomNumberGenerator: BridgeRandomNumberGenerator,
      bridgeMaker: BridgeMaker,
    };

    const views = {
      outputView: OutputView,
      inputView: InputView,
      validator: Validator,
    };

    new BridgeGame(models, views);
  }
}

const app = new App();
app.play();

module.exports = App;
