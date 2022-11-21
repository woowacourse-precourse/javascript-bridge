/* eslint-disable class-methods-use-this */
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { validateReadBridgeSize, validateReadMoving } = require('./Validate');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class App {
  #bridgeGame;

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.onReadBridgeSize.bind(this));
  }

  onReadBridgeSize(size) {
    validateReadBridgeSize(size);
    const bridge = BridgeMaker.makeBridge(size, generate);
    this.startGame(bridge);
  }

  startGame(bridge) {
    this.#bridgeGame = new BridgeGame(bridge);
    InputView.readMoving(this.onReadMoving.bind(this));
  }

  onReadMoving(moving) {
    validateReadMoving(moving);
    this.#bridgeGame.move(moving);
    InputView.readMoving(this.onReadMoving.bind(this));
  }
}

const app = new App();
app.play();
module.exports = App;
