const { Console } = require('@woowacourse/mission-utils');
const IGameView = require('./IGameView');
const { ERROR_MESSAGE } = require('../constants');

const GameView = class extends IGameView {
  constructor(inputView, outputView) {
    super();
    if (this.constructor === GameView) {
      throw new Error(ERROR_MESSAGE.abstract_class);
    }
  }

  input(message, callback) {
    Console.readLine(message, callback);
  }

  output(message) {
    Console.print(message);
  }

  close() {
    Console.close();
  }
};

module.exports = GameView;
