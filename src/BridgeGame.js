const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const movingMap = {
  U: 0,
  D: 1
};

class BridgeGame {
  #size;
  #bridge;
  #tryCount;
  #resultArray;

  constructor() {
    this.#tryCount = 1;
  }

  setGame(size) {
    this.#size = size;
    this.#bridge = BridgeMaker.makeBridge(this.#size, generate);
    this.#resultArray = [];
    console.log(this.#bridge);
  }

  isMove(input) {
    const currentIndex = this.#resultArray.length;
    // console.log(currentIndex);
    return this.#bridge[movingMap[input]][currentIndex] == input;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    if (this.isMove(input)) {
      this.#resultArray.push(input);
      console.log(this.#resultArray);
      return !(this.#resultArray == this.#size);
    }

    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
