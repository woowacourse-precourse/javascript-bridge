const { UP } = require('./constant/constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  #upperBridge = [];
  #lowerBridge = [];

  move(round, bridgeString, userInputString) {
    //n번째 round에서 bridgeString과 userInputString을 보고 다리 현황 만들기
    if (bridgeString[round] === userInputString[round]) {
      this.pushO(this.#upperBridge, this.#lowerBridge, bridgeString[round]);
    } else {
      this.pushX(this.#upperBridge, this.#lowerBridge, bridgeString[round]);
    }
    const status = this.checkStatus(round, bridgeString, userInputString);
    return { upperBridge: this.#upperBridge, lowerBridge: this.#lowerBridge, status };
  }

  pushO(bridge1, bridge2, uOrD) {
    if (uOrD === UP) {
      bridge1.push('o');
      bridge2.push('n');
    } else {
      bridge1.push('n');
      bridge2.push('o');
    }
  }

  pushX(bridge1, bridge2, uOrD) {
    if (uOrD === UP) {
      bridge1.push('n');
      bridge2.push('x');
    } else {
      bridge1.push('x');
      bridge2.push('n');
    }
  }

  checkStatus(round, bridgeString, userInputString) {
    const total_round = bridgeString.length;
    console.log(
      `checkStatus... round : ${round}, total_round : ${total_round}, upper : ${
        this.#upperBridge
      }, lower : ${this.#lowerBridge}, userInput : ${userInputString}`
    );
    if (userInputString[round] !== bridgeString[round]) {
      return 'fail';
    } else if (this.#upperBridge.length === total_round) {
      return 'finish';
    } else {
      return 'success';
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    //bridge 초기화
    this.#upperBridge = [];
    this.#lowerBridge = [];
  }
}

module.exports = BridgeGame;
