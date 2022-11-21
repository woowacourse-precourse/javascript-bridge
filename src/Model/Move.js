const COMMAND = require('../../constants/command');
const NUMBER = require('../../constants/number');
const STRING = require('../../constants/string');
const SYSTEM_MESSAGE = require('../../constants/system message');
const Bridge = require('./Bridge');
const Path = require('./Path');

class Move {
  static #moveCount = NUMBER.ZERO;

  static #currentMove = STRING.X;

  static init() {
    this.#moveCount = NUMBER.ZERO;
    this.#currentMove = STRING.X;
  }

  static countMove() {
    this.#moveCount += NUMBER.ONE;
  }

  static showCount() {
    return this.#moveCount;
  }

  static showCurrentMoveResult() {
    return this.#currentMove;
  }

  static updateCurrentMove(result) {
    this.#currentMove = result;
  }

  static canMove() {
    if (this.showCurrentMoveResult() !== STRING.O) {
      return false;
    }
    if (this.showCount() === Path.getPath().length) {
      return false;
    }
    return true;
  }

  static isSuccess() {
    return this.showCurrentMoveResult() === STRING.O
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

  static calculateMove(currentPosition, direction) {
    this.countMove();
    return currentPosition === COMMAND.UP
      ? this.moveUp(direction)
      : this.moveDown(direction);
  }

  static byDirection(direction) {
    const countIndex = this.showCount();
    const currentPosition = Path.getPathPositionOf(countIndex);
    const moveResult = this.calculateMove(currentPosition, direction);

    Bridge.setMoveResult(direction, moveResult, countIndex);
  }
}

module.exports = Move;
