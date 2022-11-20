const COMMAND = require('../../constants/command');
const NUMBER = require('../../constants/number');
const STRING = require('../../constants/string');
const SYSTEM_MESSAGE = require('../../constants/system message');

class Move {
  static #moveCount = NUMBER.ZERO;

  static #currentMove = STRING.X;

  static init() {
    this.#moveCount = NUMBER.ZERO;
    this.#currentMove = STRING.X;
  }

  static addCount() {
    this.#moveCount += NUMBER.ONE;
  }

  static showCount() {
    return this.#moveCount;
  }

  static showCurrent() {
    return this.#currentMove;
  }

  static updateCurrentMove(result) {
    this.#currentMove = result;
  }

  static canMove(path) {
    if (this.showCurrent() !== STRING.O) {
      return false;
    }
    if (this.showCount() === path.length) {
      return false;
    }
    return true;
  }

  static isSuccess() {
    return this.showCurrent() === STRING.O
      ? SYSTEM_MESSAGE.SUCCESS
      : SYSTEM_MESSAGE.FAIL;
  }

  static moveUp(direction) {
    const moveResult = direction === COMMAND.UP ? STRING.O : STRING.X;

    this.updateCurrentMove(moveResult);
    return moveResult;
  }

  static moveDown(direction) {
    const moveResult = direction === COMMAND.DOWN ? STRING.O : STRING.X;

    this.updateCurrentMove(moveResult);
    return moveResult;
  }

  static byDirection(currentCell, direction) {
    this.addCount();

    return currentCell === COMMAND.UP
      ? this.moveUp(direction)
      : this.moveDown(direction);
  }
}

module.exports = Move;
