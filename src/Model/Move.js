const COMMAND = require('../constants/command');
const NUMBER = require('../constants/number');
const STRING = require('../constants/string');

class Move {
  static #moveCount = NUMBER.ZERO;

  static #currentMove = STRING.X;

  static getCount() {
    return this.#moveCount;
  }

  static init() {
    this.#moveCount = NUMBER.ZERO;
    this.#currentMove = STRING.X;
  }

  static countMove() {
    this.#moveCount += NUMBER.ONE;
  }

  static updateCurrentMove(result) {
    this.#currentMove = result;
  }

  static canMove() {
    return this.#currentMove === STRING.O;
  }

  static compareUp(direction) {
    return direction === COMMAND.UP ? STRING.O : STRING.X;
  }

  static compareDown(direction) {
    return direction === COMMAND.DOWN ? STRING.O : STRING.X;
  }

  static calculateMoveResult(currentPosition, direction) {
    this.countMove();

    return currentPosition === COMMAND.UP
      ? this.compareUp(direction)
      : this.compareDown(direction);
  }
}

module.exports = Move;
