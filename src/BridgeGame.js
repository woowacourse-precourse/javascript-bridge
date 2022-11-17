/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const Check = require('./Check');
const OutputView = require('./OutputView');
class BridgeGame {
  #brigeShape;
  #index;
  #uparray;
  #downarray;
  #playerInput;
  #isGameOver;
  constructor(brigeShape) {
    this.#brigeShape = brigeShape;
    this.#index = 0;
    this.#uparray = [];
    this.#downarray = [];
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
    OutputView.printMap(this.#uparray, this.#downarray);
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

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#isGameOver = false;
    this.#index = 0;
    this.#uparray = [];
    this.#downarray = [];
  }
}

module.exports = BridgeGame;
