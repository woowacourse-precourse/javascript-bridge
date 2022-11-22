const Move = require('./Move');
const Path = require('./Path');
const Bridge = require('./Bridge');
const NUMBER = require('../constants/number');
const COMMAND = require('../constants/command');
const SYSTEM_MESSAGE = require('../constants/system message');

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

  static makePath() {
    const size = Bridge.getSize();
    Path.makePath(size);
  }

  static mapBridge() {
    const moveCount = Move.getCount();
    return Bridge.makeValidForm(moveCount);
  }

  static move(direction) {
    const moveCount = Move.getCount();
    const currentPosition = Path.positionOf(moveCount);
    const moveResult = Move.calculateMoveResult(currentPosition, direction);

    Move.updateCurrentMoveResult(moveResult);
    Bridge.setMoveResult(direction, moveResult, moveCount);
  }

  static isPassed() {
    const isArrived = Move.getCount() === Path.getPath().length;
    return !!(isArrived && Move.canMove());
  }

  static showSucceedMessage() {
    return this.isPassed() ? SYSTEM_MESSAGE.SUCCESS : SYSTEM_MESSAGE.FAIL;
  }

  static keepPlay(command) {
    return command === COMMAND.REPLAY;
  }

  retry() {
    this.#playCount += NUMBER.ONE;
    BridgeGame.init();
  }
}

module.exports = BridgeGame;
