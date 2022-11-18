const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { LETTER } = require("./constant");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #steps = [];
  #trialTime = 1;

  setBridge = (number) => {
    this.#bridge = BridgeMaker.makeBridge(number, generate);
  };

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move = (letter) => {
    this.#steps.push(letter);
    const isCorrect = this.#isCorrect();
    const isGameOver = this.#isGameOver();
    const map = this.#makeMap();
    return { map, isCorrect, isGameOver, trialTime: this.#trialTime };
  };

  #isCorrect() {
    const lastIndex = this.#steps.length - 1;
    return this.#steps[lastIndex] === this.#bridge[lastIndex];
  }

  #isGameOver() {
    return this.#bridge.length === this.#steps.length;
  }

  #makeMap() {
    return this.#steps.map((step, ind) => [
      step,
      this.#bridge[ind] === step ? LETTER.correct : LETTER.wrong,
    ]);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry = () => {
    this.#steps = [];
    this.#trialTime += 1;
  };
}

module.exports = BridgeGame;
