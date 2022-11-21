const BridgeGame = require('./BridgeGame');
const Controller = require('./Controller');
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Validator = require('./Validator');

class App {
  play() {
    const models = {
      bridgeGame: new BridgeGame(),
      bridgeMaker: BridgeMaker,
      bridgeRandomNumberGenerator: BridgeRandomNumberGenerator,
    };

    const views = {
      inputView: InputView,
      outputView: OutputView,
      validator: new Validator(),
    };

    new Controller(models, views);
  }
}

const app = new App();
app.play();

module.exports = App;
