const { DEFAULTS } = require('../utils/Constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #resultList;

  constructor() {
    this.init();
    this.restartcnt = 1;
  }

  init() {
    this.#resultList = [[], [], 0]; // upList, downList, movecnt
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(answer, upOrdown) {
    answer[this.#resultList[2]] === upOrdown
      ? this.checkUporDown(upOrdown, DEFAULTS.CAN_MOVE)
      : this.checkUporDown(upOrdown, DEFAULTS.CANT_MOVE);
    this.#resultList[2] += 1;
    return this.#resultList;
  }

  checkUporDown(upOrdown, mark) {
    if (upOrdown === DEFAULTS.UP) {
      this.moveRecord(this.#resultList[0], this.#resultList[1], mark);
    }
    if (upOrdown === DEFAULTS.DOWN) {
      this.moveRecord(this.#resultList[1], this.#resultList[0], mark);
    }
  }

  moveRecord(recordMark, recordSpace, mark) {
    recordMark.length !== 0 ? recordMark.push(DEFAULTS.SEPARATOR, mark) : recordMark.push(mark);
    recordSpace.length !== 0
      ? recordSpace.push(DEFAULTS.SEPARATOR, DEFAULTS.SPACE)
      : recordSpace.push(DEFAULTS.SPACE);
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.init();
    this.restartcnt += 1;
  }
}

const bridgeGame = new BridgeGame();
module.exports = bridgeGame;
