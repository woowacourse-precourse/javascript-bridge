const OutputView = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  constructor(bridge) {
    this.#bridge = bridge;
    this.step = 0;
    this.round = 1;
  }

  getBridge() {
    return this.#bridge;
  }

  resetStep() {
    this.step = 0;
    return this.step;
  }

  addStep() {
    this.step += 1;
    return this.step;
  }

  addRound() {
    this.round += 1;
    return this.round;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  // checkInputIsCorrect(inputAnswer, step) {
  //   if (inputAnswer === this.#bridge[step]) return true;
  //   return false;
  // }
  checkInputIsCorrect(inputAnswer) {
    if (inputAnswer === this.#bridge[this.step]) return true;
    return false;
  }

  checkIsLastStep(step, size) {
    return step === size ? true : false;
  }

  move(step, size) {
    if (this.checkIsLastStep(step, size - 1)) {
      OutputView.printMap(step, this.#bridge);
      return true;
    }
    OutputView.printMap(step, this.#bridge);
    return false;
  }

  move(answer, step, round, size) {
    if (this.checkInputIsCorrect(answer, step)) {
      OutputView.printMap(step, this.#bridge);
      if (this.checkIsLastStep(step, size - 1)) {
        OutputView.printResult("성공", round, step, this.#bridge);
        return;
      }
      // InputView.readMoving(this.#bridge, size, step + 1, round);
      return;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
