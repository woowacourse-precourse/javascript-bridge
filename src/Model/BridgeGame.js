const Move = require('./Move');
const Bridge = require('./Bridge');
const NUMBER = require('../../constants/number');
const COMMAND = require('../../constants/command');

class BridgeGame {
  #playCount;

  constructor() {
    this.#playCount = NUMBER.ONE;
  }

  getPlayCount() {
    return this.#playCount;
  }

  static init() {
    Bridge.init();
    Move.init();
  }

  static mapBridge() {
    const moveCount = Move.showCount();
    return Bridge.makeValidForm(moveCount);
  }

  static keepPlay(command) {
    return command === COMMAND.REPLAY;
  }

  static move(direction) {
    Move.byDirection(direction);
  }

  retry() {
    this.#playCount += NUMBER.ONE;
    BridgeGame.init();
  }
}

module.exports = BridgeGame;
