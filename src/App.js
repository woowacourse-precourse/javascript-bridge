const BridgeGame = require('./BridgeGame');
const BridgeModel = require('./BridgeModel');
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

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
    };

    new BridgeGame(models, views);
  }
}

const app = new App();
app.play();

module.exports = App;
