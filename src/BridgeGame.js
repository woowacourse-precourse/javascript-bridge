/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const MissionUtils = require('@woowacourse/mission-utils');
const { printResult } = require('./OutputView');
const OutputView = require('./OutputView');
class BridgeGame {
  #brigeShape;
  #index;
  #uparray;
  #downarray;
  #playerInput;
  constructor(brigeShape) {
    this.#brigeShape = brigeShape;
    this.#index = 0;
    this.#uparray = [];
    this.#downarray = [];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(playerInput) {
    this.#playerInput = playerInput;
    MissionUtils.Console.print(this.#brigeShape);
    if (this.#playerInput === this.#brigeShape[this.#index]) {
      this.playerInputTrue();
    } else {
      this.playerInputFalse();
    }
    OutputView.printMap(this.#uparray, this.#downarray);
    this.#index++;
    if (this.#index === this.#brigeShape.length) OutputView.printResult();
  }

  playerInputTrue() {
    if (this.#playerInput === 'U') {
      this.#uparray.push('O');
      this.#downarray.push(' ');
      return;
    }
    this.#uparray.push(' ');
    this.#downarray.push('O');
    return;
  }
  playerInputFalse() {
    if (this.#playerInput === 'D') {
      this.#uparray.push(' ');
      this.#downarray.push('X');
      return;
    }
    this.#uparray.push('X');
    this.#downarray.push(' ');
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
