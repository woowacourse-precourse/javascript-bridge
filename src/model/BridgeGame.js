const { DIRECTION, PHASE } = require('../constant/Constant');
const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

const RESULT = Object.freeze({
  SUCCESS: '성공',
  FAIL: '실패',
});

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #OBJECT = Object.freeze({
    [RESULT.SUCCESS]: 'O',
    [RESULT.FAIL]: 'X',
    BLANK: ' ',
  });

  #bridge;

  #playerPosition;

  try = 0;

  moveMap = new Map();

  constructor(size) {
    this.#bridge = makeBridge(size, generate);
    this.#reset();
  }

  #reset() {
    this.#playerPosition = -1;
    this.try += 1;
    this.result = RESULT.SUCCESS;
    this.#resetMap();
  }

  #resetMap() {
    const { moveMap } = this;

    moveMap.set(DIRECTION[1], []);
    moveMap.set(DIRECTION[0], []);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    const bridge = this.#bridge;

    this.#playerPosition += 1;
    if (moving !== bridge[this.#playerPosition]) {
      this.result = RESULT.FAIL;
      return PHASE.COMMAND;
    }
    if (this.#playerPosition + 1 === bridge.length) {
      return PHASE.RESULT;
    }
    return PHASE.MOVE;
  }

  drawMap(moving) {
    const { moveMap, result } = this;
    const unchosen = new Set(moveMap.keys());

    moveMap.get(moving).push(this.#OBJECT[result]);
    unchosen.delete(moving);
    unchosen.forEach((direction) => {
      moveMap.get(direction).push(this.#OBJECT.BLANK);
    });
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(goTo) {
    this.#reset();
    goTo(PHASE.MOVE);
  }
}

module.exports = BridgeGame;
