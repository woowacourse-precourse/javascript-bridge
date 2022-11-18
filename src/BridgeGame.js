const Check = require('./Check');
const BridgePrint = require('./BridgePrint');
class BridgeGame {
  #brigeShape;
  #index;
  #uparray;
  #downarray;
  #playerInput;
  #isGameOver;
  #count;
  constructor(brigeShape) {
    this.#brigeShape = brigeShape;
    this.#index = 0;
    this.#uparray = [];
    this.#downarray = [];
    this.#count = 1;
    this.#isGameOver = false;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(playerInput) {
    this.#playerInput = playerInput;
    if (this.#playerInput === this.#brigeShape[this.#index]) {
      this.playerInputTrue();
    } else {
      this.playerInputFalse();
    }
    BridgePrint.printBridge(this.#uparray, this.#downarray);
    this.#index++;
    return Check.checkIsGameOver(this.#isGameOver, this.#index, this.#brigeShape.length);
  }

  playerInputTrue() {
    if (this.#playerInput === 'U') {
      this.#uparray.push('O');
      this.#downarray.push(' ');
      return;
    }
    this.#uparray.push(' ');
    this.#downarray.push('O');
  }

  playerInputFalse() {
    if (this.#playerInput === 'D') {
      this.#uparray.push(' ');
      this.#downarray.push('X');
      this.#isGameOver = true;
      return;
    }
    this.#uparray.push('X');
    this.#downarray.push(' ');
    this.#isGameOver = true;
  }
  retry() {
    this.#isGameOver = false;
    this.#index = 0;
    this.#uparray = [];
    this.#downarray = [];
  }
  addCount() {
    this.#count = this.#count + 1;
  }
  getPrintParams() {
    return [this.#uparray, this.#downarray, this.#count];
  }
}

module.exports = BridgeGame;
