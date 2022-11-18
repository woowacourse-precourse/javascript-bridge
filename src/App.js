const Bridge = require('./Bridge');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');

class App {
  play() {
    const models = {
      bridge: new Bridge(),
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
