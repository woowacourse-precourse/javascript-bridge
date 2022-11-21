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
  #bridge = {
    U: [],
    D: [],
  };

  move(round, bridgeString, userInputString) {
    //n번째 round에서 bridgeString과 userInputString을 보고 다리 보여주기
    // for (let i = 0; i < round; i++) {
    //   // console.log(bridgeString[i] === userInputString[i]);
    //   if (bridgeString[i] === userInputString[i] && bridgeString[i] === 'U') {
    //     this.#upperBridge.push('o');
    //     this.#lowerBridge.push('n');
    //   } else if (bridgeString[i] === userInputString[i] && bridgeString[i] === 'D') {
    //     this.#upperBridge.push('n');
    //     this.#lowerBridge.push('o');
    //   } else if (bridgeString[i] === 'U') {
    //     this.#upperBridge.push('x');
    //     this.#lowerBridge.push('n');
    //     return false;
    //   } else {
    //     this.#lowerBridge.push('x');
    //     this.#upperBridge.push('n');
    //     return false;
    //   }
    // }
    if (bridgeString[round] === userInputString[round] && bridgeString[round] === 'U') {
      this.#upperBridge.push('o');
      this.#lowerBridge.push('n');
    } else if (bridgeString[round] === userInputString[round] && bridgeString[round] === 'D') {
      this.#upperBridge.push('n');
      this.#lowerBridge.push('o');
    } else if (bridgeString[round] === 'U') {
      this.#upperBridge.push('x');
      this.#lowerBridge.push('n');
      return false;
    } else {
      this.#lowerBridge.push('x');
      this.#upperBridge.push('n');
      return false;
    }
    console.log(this.#upperBridge);
    console.log(this.#lowerBridge);
    return true;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
  showCurrentBridge() {}
}

module.exports = BridgeGame;
