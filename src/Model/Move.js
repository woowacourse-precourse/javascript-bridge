const COMMAND = require('../../constants/command');
const NUMBER = require('../../constants/number');
const STRING = require('../../constants/string');

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

  // current 업데이트 할 때의 중복되는 부분을 제거하고 싶은데...
  // path값이 U일때 입력이 U라면 O 반환
  static moveUp(direction) {
    const moveResult = direction === COMMAND.UP ? STRING.O : STRING.X;

    this.updateCurrentMove(moveResult);
    return moveResult;
  }

  // path값이 D일때 입력이 D라면 O 반환
  static moveDown(direction) {
    const moveResult = direction === COMMAND.DOWN ? STRING.O : STRING.X;

    this.updateCurrentMove(moveResult);
    return moveResult;
  }

  // 입력받은 direction과
  // 정답 path값에 따라 값 비교하여 반환
  // 각각 다른 함수 호출
  static byDirection(currentCell, direction) {
    this.addCount();

    return currentCell === COMMAND.UP
      ? this.moveUp(direction)
      : this.moveDown(direction);
  }
}

module.exports = Move;
