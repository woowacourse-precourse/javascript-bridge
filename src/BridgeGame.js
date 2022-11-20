const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");
const { Console } = require("@woowacourse/mission-utils");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  getBridge() {
    return this.#bridge;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  checkInputIsCorrect(inputAnswer, step) {
    Console.print(this.#bridge);
    if (inputAnswer === this.#bridge[step]) return true;
    return false;
  }

  checkIsLastStep(step, size) {
    return step === size ? true : false;
  }

  move(step, size, locations) {
    if (this.checkIsLastStep(step, size - 1)) {
      OutputView.printMap(step, this.#bridge);
      OutputView.printResult("성공", 1);
      return true;
    }
    OutputView.printMap(step, this.#bridge);
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
