const GameView = require('./GameView');

const BridgeView = class extends GameView {
  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }
};

module.exports = BridgeView;
