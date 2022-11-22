/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(currentBridge, bridge, input) {
    /**
     * @param {string[][]} currentBridge - 현재까지 진행된 다리 상태
     * @param {string[]} bridge - 입력하는 길이에 해당하는 다리 모양. U와 D로 구성 ex)['U', 'D', 'U']
     * @param {string} input - U/D로 입력되는 다리의 위 아래 결정 ex) 'U'
     */
    let bridgeLen = currentBridge[0].length;
    if(input===bridge[bridgeLen]) input === 'U' ? ( currentBridge[0][bridgeLen]='O', currentBridge[1][bridgeLen]=' ' ) : ( currentBridge[1][bridgeLen]='O', currentBridge[0][bridgeLen]=' ');
    else input === 'U' ? ( currentBridge[0][bridgeLen]='X', currentBridge[1][bridgeLen]=' ' ) : ( currentBridge[1][bridgeLen]='X', currentBridge[0][bridgeLen]=' ');
    return currentBridge;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(currentBridge) {
    currentBridge=[[],[]];
    return currentBridge;
  }
}

module.exports = BridgeGame;
