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
    const roundResult = {};
    if (bridgeString[round] === userInputString[round] && bridgeString[round] === 'U') {
      this.pushO(this.#upperBridge, this.#lowerBridge);
    } else if (bridgeString[round] === userInputString[round] && bridgeString[round] === 'D') {
      this.pushO(this.#lowerBridge, this.#upperBridge);
    } else if (bridgeString[round] === 'U') {
      this.pushX(this.#upperBridge, this.#lowerBridge);
    } else if (bridgeString[round] === 'D') {
      this.pushX(this.#lowerBridge, this.#upperBridge);
    }
    return true;
  }
  pushO(bridge1, bridge2) {
    bridge1.push('o');
    bridge2.push('n');
  }
  pushX(bridge1, bridge2) {
    bridge1.push('x');
    bridge2.push('n');
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
  showCurrentBridge() {
    let upperStr = '[';
    let lowerStr = '[';
    for (let i in this.#upperBridge) {
      upperStr += this.modifyCurStr(this.#upperBridge[i]);
      lowerStr += this.modifyCurStr(this.#lowerBridge[i]);
    }
    upperStr += '\b]';
    lowerStr += '\b]';
    console.log(upperStr);
    console.log(lowerStr);
  }
  modifyCurStr(char) {
    switch (char) {
      case 'o':
        return ' O |';
      case 'n':
        return '   |';
      case 'x':
        return ' X |';
      default:
        break;
    }
  }
}

module.exports = BridgeGame;
