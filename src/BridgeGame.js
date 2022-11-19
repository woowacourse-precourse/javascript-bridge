const OutputView = require('./OutputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #currentPosition;
  #move;
  #crossableBridgeList;

  constructor(move, currentPosition, crossableBridgeList) {
    this.#move = move;
    this.#currentPosition = currentPosition;
    this.#crossableBridgeList = crossableBridgeList;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    const upperList = [];
    const lowerList = [];
    for (let count = 0; count < this.#currentPosition; count++) {
      if (this.#crossableBridgeList[count] === 'U') {
        upperList.push('O');
        lowerList.push(' ');
      }
      if (this.#crossableBridgeList[count] === 'D') {
        upperList.push(' ');
        lowerList.push('O');
      }
    }
    if (this.#move === this.#crossableBridgeList[this.#currentPosition]) {
      if (this.#move === 'U') {
        upperList.push('O');
        lowerList.push(' ');
      }
      if (this.#move === 'D') {
        upperList.push(' ');
        lowerList.push('O');
      }
    }
    if (this.#move !== this.#crossableBridgeList[this.#currentPosition]) {
      if (this.#move === 'U') {
        upperList.push('X');
        lowerList.push(' ');
      }
      if (this.#move === 'D') {
        upperList.push(' ');
        lowerList.push('X');
      }
    }
    const upper = `[ ${upperList.join(' | ')} ]`;
    const lower = `[ ${lowerList.join(' | ')} ]`;
    OutputView.printMap(upper, lower);
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
