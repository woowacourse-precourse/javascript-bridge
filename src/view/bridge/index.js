const GameView = require('../GamveView');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

const BridgeView = class extends GameView {
  constructor() {
    super();
    this.#InputView = new InputView();
    this.#OutputView = new OutputView();
  }
};

module.exports = BridgeView;
