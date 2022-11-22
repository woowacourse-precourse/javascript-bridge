/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(inputBridgeChoice, bridge, bridgeList) {
    const index = bridgeList[0].length;
    if (inputBridgeChoice === 'U') {
      if (inputBridgeChoice === bridge[index]) {
        bridgeList[0].push('O');
        bridgeList[1].push(' ');
      } else {
        bridgeList[0].push('X');
        bridgeList[1].push(' ');
        this.retry();
      }
    } else {
      if (inputBridgeChoice === bridge[index]) {
        bridgeList[1].push('O');
        bridgeList[0].push(' ');
      } else {
        bridgeList[1].push('X');
        bridgeList[0].push(' ');
        this.retry();
      }
    }
    return bridgeList;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    let bridgeList = [[], []];
    return bridgeList;
  }
}

module.exports = BridgeGame;
