const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
const InputView = require("./InputView");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */

// InputView, Outputview 사용하면 안됨

class BridgeGame {
  #bridgeArr;

  constructor(length) {
    this.#bridgeArr = makeBridge(length, generate);
    this.stepArr = [];
  }

  move(inputDirection) {
    this.judgeSuccess(this.getNumOfSteps(), inputDirection);
    this.updateProgressOfGame(inputDirection);
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    // 처음에 만든 정답 다리 리스트, 총 시도 횟수 기억한채로 iii.으로 다시 돌아감
  }
  updateProgressOfGame(inputDirection) {
    this.stepArr.push(inputDirection);
    if (this.stepArr.length === this.#bridgeArr.length) this.isCleared = true;
  }
  getNumOfSteps() {
    return this.stepArr.length;
  }

  judgeSuccess(index, inputDirection) {
    this.isSuccess = this.#bridgeArr[index] === inputDirection;
  }
}

module.exports = BridgeGame;
