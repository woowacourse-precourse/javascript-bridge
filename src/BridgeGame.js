const constant = require('./constant');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #root;

  constructor(root) {
    this.#root = root;
    this.way = [];
    this.count = 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(selector) {
    this.way.push(selector);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.way = [];
    this.count++
  }

  get isGoWay() {
    for (let i = 0; i < this.way.length; i++) {
      if(this.way[i] !== this.#root[i]) return false;
    }
    return true;
  }

  get isSuccess() {
    return this.isGoWay && this.way.length === this.#root.length
  }

  compareResult(selectWay) {
    let result = [];
    for(let i = 0; i < this.way.length; i++) {
      const compareResult = this.calculatorOXIndex(selectWay, i);
      result.push(compareResult)
    }

    return result;
  }

  calculatorOXIndex(selectWay, wayIndex) {
    if(this.way[wayIndex] === selectWay) {
      return this.way[wayIndex] === this.#root[wayIndex] ? constant.O : constant.X
    }
    return " ";
  }
}

module.exports = BridgeGame;
