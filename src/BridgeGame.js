const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
const Values = require("./constants/Values.js");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */

// InputView, Outputview 사용하면 안됨

class BridgeGame {
  #bridgeArr;

  constructor(length) {
    this.#bridgeArr = makeBridge(length, generate);
    this.stepObj = { upperPart: [], lowerPart: [] };
  }

  move(inputDirection) {
    this.judgeSuccess(this.getNumOfSteps(), inputDirection);
    this.updateProgressOfGame(inputDirection);
    this.judgeGameCleard();
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    // 처음에 만든 정답 다리 리스트, 총 시도 횟수 기억한채로 iii.으로 다시 돌아감
  }
  judgeSuccess(index, inputDirection) {
    this.isSuccess = this.#bridgeArr[index] === inputDirection;
  }
  updateProgressOfGame(inputDirection) {
    const MARK = this.getCurrentMark();
    if (inputDirection === Values.UPWARD_MOVEMENT) return this.moveToUpper(MARK);
    return this.moveToLower(MARK);
  }
  moveToUpper(MARK) {
    this.stepObj.upperPart.push(MARK);
    this.stepObj.lowerPart.push(Values.BLANK);
  }

  moveToLower(MARK) {
    this.stepObj.lowerPart.push(MARK);
    this.stepObj.upperPart.push(Values.BLANK);
  }

  getCurrentMark() {
    if (this.isSuccess) return Values.SUCCESS_MARK;
    return Values.FAIL_MARK;
  }

  getNumOfSteps() {
    return this.stepObj.upperPart.length;
  }

  judgeGameCleard() {
    if (this.getNumOfSteps() === this.#bridgeArr.length) this.isCleared = true;
  }
}

module.exports = BridgeGame;
