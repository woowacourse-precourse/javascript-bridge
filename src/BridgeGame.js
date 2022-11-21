const Map = require('./Map');
const { RESULT } = require('./utils/constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.birdgeMap = [];
    this.result = RESULT.SUCCESS;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridgeInfo, moveDirection) {
    bridgeInfo.userMove.push(moveDirection);
    this.bridgeMap = Map.makeMap(bridgeInfo);
  }

  setResult(userMove, bridge) {
    this.result = RESULT.SUCCESS;
    for (let index = 0; index < userMove.length; index++) {
      if (userMove[index] != bridge[index]) this.result = RESULT.FAILURE;
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
