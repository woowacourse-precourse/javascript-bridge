const GameView = require('./GameView');

const BridgeView = class extends GameView {
  constructor(inputView, outputView) {
    super();
    this.inputView = inputView;
    this.outputView = outputView;
  }
};

module.exports = BridgeView;
