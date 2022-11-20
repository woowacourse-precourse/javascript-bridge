const Move = require('./Move');
const Bridge = require('./Bridge');
const NUMBER = require('../../constants/number');

class BridgeGame {
  #playCount;

  constructor() {
    this.#playCount = NUMBER.ONE;
  }

  static mapBridge() {
    const moveCount = Move.showCount();
    return Bridge.makeValidForm(moveCount);
  }

  static canMove() {
    return Move.canMove();
  }

  static move(direction) {
    Move.byDirection(direction);
  }

  getPlayCount() {
    return this.#playCount;
  }

  makeBridge() {
    Bridge.makePath();
    this.init();
    // console.log(Bridge.getPath());
  }

  init() {
    Bridge.init();
    Move.init();
  }

  retry() {
    this.#playCount += NUMBER.ONE;
    this.init();
  }
}

module.exports = BridgeGame;
