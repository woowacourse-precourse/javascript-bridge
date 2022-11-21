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
    const roundResult = {};
    if (bridgeString[round] === userInputString[round]) {
      roundResult.status = 'success';
      this.pushO(this.#upperBridge, this.#lowerBridge, bridgeString[round]);
    } else {
      this.pushX(this.#upperBridge, this.#lowerBridge, bridgeString[round]);
      roundResult.status = 'fail';
    }
    if (round === bridgeString.length - 1) {
      roundResult.status = 'end';
    }
    return roundResult;
  }

  pushO(bridge1, bridge2, uOrD) {
    if (uOrD === 'U') {
      bridge1.push('o');
      bridge2.push('n');
    } else {
      bridge1.push('n');
      bridge2.push('o');
    }
  }

  pushX(bridge1, bridge2, uOrD) {
    if (uOrD === 'U') {
      bridge1.push('n');
      bridge2.push('x');
    } else {
      bridge1.push('x');
      bridge2.push('n');
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    //bridge 한칸씩 지우기? 아니면 round 줄이면 되려나...
    
  }
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
