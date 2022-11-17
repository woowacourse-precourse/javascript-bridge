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
    this.handleResult();
  }

  handleResult() {
    const map = this.#model.getMap();
    const latestResult = map[map.length - 1].result;

    if (latestResult === true && map.length === this.#model.getBridge().length) {
      OutputView.printResult(map, this.#model.getTryCount());
    } else if (latestResult === false) {
      InputView.readGameCommand(this.handleGameCommand.bind(this));
    } else {
      InputView.readMoving(this.handleMoving.bind(this));
    }
  }

  handleGameCommand(gameCommand) {
    if (gameCommand === 'Q') {
      OutputView.printResult(this.#model.getMap(), this.#model.getTryCount());
    } else {
      this.#model.retry();
      InputView.readMoving(this.handleMoving.bind(this));
    }
  }
}

module.exports = App;
