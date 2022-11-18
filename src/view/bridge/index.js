const GameView = require('../GamveView');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

const BridgeView = class extends GameView {
  constructor() {
    super(new InputView(), new OutputView());
  }
};

module.exports = BridgeView;
