const IGameView = require('./IGameView');
const { ERROR_MESSAGE } = require('../constants');

const GameView = class extends IGameView {
  constructor(inputView, outputView) {
    super();
    this.inputView = inputView;
    this.outputView = outputView;
    if (this.constructor === GameView) {
      throw new Error(ERROR_MESSAGE.abstract_class);
    }
  }
};

module.exports = GameView;
