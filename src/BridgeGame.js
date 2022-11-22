/**
 * 다리 건너기 게임을 관리하는 클래스
 */

const BridgeMaker = require('./BridgeMaker');
const { GAME_STATUS } = require('./Message');
class BridgeGame {
  #bridgeList;
  #firstRow;
  #secondRow;
  #count;
  constructor() {
    this.#bridgeList = [];
    this.#firstRow = [];
    this.#secondRow = [];
    this.#count = 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    const { IMPOSSIBLE } = GAME_STATUS;
    if ([...this.#firstRow, ...this.#secondRow].join('').includes(IMPOSSIBLE)) {
      return false;
    }
    return true;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#firstRow = [];
    this.#secondRow = [];
    count++;
  }

  setBridge() {
    const bridgeMaker = new BridgeMaker();
    this.#bridgeList = bridgeMaker.makeBridge();
  }

  setMoveInput(input) {
    const bridge = this.selectUpDown(input);
    bridge.push(this.selectPattern(input, this.getRowLength()));
    this.insertSpace(bridge);
  }

  getBridgeMap() {
    return [this.#firstRow, this.#secondRow];
  }

  selectUpDown(input) {
    const { UP } = GAME_STATUS;

    if (input === UP) return this.#firstRow;

    return this.#secondRow;
  }

  selectPattern(data, index) {
    const { POSSIBLE, IMPOSSIBLE } = GAME_STATUS;

    if (data === this.#bridgeList[index]) return POSSIBLE;
    return IMPOSSIBLE;
  }

  insertSpace(bridge) {
    const { SPACE } = GAME_STATUS;
    if (bridge === this.#firstRow) {
      this.#secondRow.push(SPACE);
      return;
    }

    this.#firstRow.push(SPACE);
  }

  getRowLength() {
    return this.#firstRow.length;
  }

  getCount() {
    return this.#count;
  }
}

module.exports = BridgeGame;
