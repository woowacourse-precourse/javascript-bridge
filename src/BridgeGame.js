const { STATE } = require('./Constant');

const RESULT = Object.freeze({
  SUCCESS: '성공',
  FAIL: '실패',
});

const OBJECT = Object.freeze({
  [RESULT.SUCCESS]: 'O',
  [RESULT.FAIL]: 'X',
  BLANK: ' ',
});

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  try = 0;

  constructor(bridge) {
    this.bridge = bridge;
    this.reset();
  }

  reset() {
    this.try += 1;
    this.result = RESULT.SUCCESS;
    this.state = STATE.MOVE;
    this.playerPosition = -1;
    this.moveMap = {
      U: [],
      D: [],
    };
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    const { bridge } = this;

    this.playerPosition += 1;
    if (moving !== bridge[this.playerPosition]) {
      this.result = RESULT.FAIL;
      this.state = STATE.FAIL;
    } else if (this.playerPosition + 1 === bridge.length) {
      this.state = STATE.QUIT;
    }
  }

  drawMap(moving) {
    const { moveMap, result } = this;
    const unchosen = 'UD'.replace(moving, '');

    moveMap[moving].push(OBJECT[result]);
    moveMap[unchosen].push(OBJECT.BLANK);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(flowController) {
    this.reset();
    flowController(this.state);
  }
}

module.exports = BridgeGame;
