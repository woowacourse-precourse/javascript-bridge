const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  #model;

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.init.bind(this));
  }

  init(size) {
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#model = new BridgeGame(bridge);
    InputView.readMoving(this.handleMoving.bind(this));
  }

  handleMoving(moving) {
    this.#model.move(moving);
    OutputView.printMap(this.#model.getMap());
  }
}
module.exports = App;
