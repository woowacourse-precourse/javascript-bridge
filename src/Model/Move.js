const COMMAND = require('../constants/command');
const NUMBER = require('../constants/number');
const STRING = require('../constants/string');
const SYSTEM_MESSAGE = require('../constants/system message');
const Bridge = require('./Bridge');
const Path = require('./Path');

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

  static showCurrentMoveResult() {
    return this.#currentMove;
  }

  static updateCurrentMove(result) {
    this.#currentMove = result;
  }

  static isArrived() {
    const isReached = this.getCount() === Path.getPath().length;
    return !!(isReached && this.canMove());
  }

  static canMove() {
    return this.showCurrentMoveResult() === STRING.O;
  }

  static isSuccess() {
    return this.showCurrentMoveResult() === STRING.O
      ? SYSTEM_MESSAGE.SUCCESS
      : SYSTEM_MESSAGE.FAIL;
  }

  static matchUp(direction) {
    return direction === COMMAND.UP ? STRING.O : STRING.X;
  }

  static matchDown(direction) {
    return direction === COMMAND.DOWN ? STRING.O : STRING.X;
  }

  static calculate(currentPosition, direction) {
    this.countMove();

    return currentPosition === COMMAND.UP
      ? this.matchUp(direction)
      : this.matchDown(direction);
  }

  static byDirection(direction) {
    const countIndex = this.getCount();
    const currentPosition = Path.positionOf(countIndex);
    const moveResult = this.calculate(currentPosition, direction);

    this.updateCurrentMove(moveResult);
    Bridge.setMoveResult(direction, moveResult, countIndex);
  }
}

module.exports = Move;
