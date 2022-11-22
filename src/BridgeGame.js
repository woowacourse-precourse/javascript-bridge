const { UP_OR_DOWN, PRINT_MAP } = require('./Constant.js');
const { makeBridge } = require('./BridgeMaker.js');
const { generate } = require('./BridgeRandomNumberGenerator.js');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.bridge;
    this.roundCount = 0;
    this.totalCount = 1;
    this.nowMap = {
      'U': [],
      'D': []
    };
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * 
   */

  generateBridge(bridgeSize) {
    this.bridge = makeBridge(bridgeSize, generate)
  }

  getBridgeSize() {
    return this.bridge.length;
  }

  move(movingInfo) {
    const compareIndex = this.roundCount;
    const other = movingInfo === 'U' ? UP_OR_DOWN.DOWN : UP_OR_DOWN.UP;

    const pushString = this.bridge[compareIndex] === movingInfo ? PRINT_MAP.CORRECT_MOVING : PRINT_MAP.INCORRECT_MOVING;
    const returnTF = this.bridge[compareIndex] === movingInfo ? true : false;

    this.nowMap[movingInfo].push(pushString);
    this.nowMap[other].push(PRINT_MAP.NONE_MOVING);

    this.roundCount++;
    return returnTF;
  }

  judgeEnd(bridgeGame, tf) {
    if (tf && (bridgeGame.roundCount - 1) === bridgeGame.getBridgeSize() - 1) {
      return true;
    }

    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.totalCount++;
    this.roundCount = 0;
    this.nowMap = {
      'U': [],
      'D': []
    }
  }
}

module.exports = BridgeGame;
