const { UP_OR_DOWN, PRINT_MAP, JUDGE_NEXT_STEP } = require('./Constant.js');
const { makeBridge } = require('./BridgeMaker.js');
const { generate } = require('./BridgeRandomNumberGenerator.js');

/**
 * 다리 건너기 게임을 관리하는 클래스이다.
 * 
 * InputView와 OutputView가 하는 역할을 제외한 모든 로직이 포함되어 있다.
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

  judgeNextStep(tf) {
    if (tf && (this.roundCount - 1) === this.getBridgeSize() - 1) {
      return JUDGE_NEXT_STEP.END;
    } else if (tf) {
      return JUDGE_NEXT_STEP.ONGOING;
    } else if (!tf) {
      return JUDGE_NEXT_STEP.RESTART_OR_FAIL;
    }
  }

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
