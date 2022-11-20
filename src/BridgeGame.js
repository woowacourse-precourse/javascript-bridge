const STATE = Object.freeze({
  MOVE: 0,
  FAIL: 1,
});

const OBJECT = Object.freeze({
  [STATE.MOVE]: 'O',
  [STATE.FAIL]: 'X',
  BLANK: ' ',
});

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  state = STATE.MOVE;
  playerPosition = -1;
  moveMap = {
    U: [],
    D: [],
  };

  constructor(bridge) {
    this.bridge = bridge;
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
      this.state = STATE.FAIL;
    }
  }

  drawMap(moving) {
    const { moveMap, state } = this;
    const unchosen = 'UD'.replace(moving, '');

    moveMap[moving].push(OBJECT[state]);
    moveMap[unchosen].push(OBJECT.BLANK);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
