const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { BRIDGE_GAME } = require('../Constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #size;

  #prebuilt;

  #tryCount;

  constructor() {
    this.#tryCount = 1;
  }

  /**
   * @member { string } up - 위쪽 다리 map
   * @member { string } down - 아래쪽 다리 map
   */
  #bridgeStatus = {
    up: '',
    down: '',
  };

  /**
   * @member { string } upOrDown - 위쪽인지 아래쪽인지 택 1
   * @member { number } state - 이동할 수 있는 칸이면 1 이동할 수 없는 칸이면 0
   * @member { number } order - 대조하는 순서
   */
  #bridgeData = {
    upOrDown: null,
    state: null,
    order: null,
  };

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @returns { string[] } 입력값에 맞는 다리를 그린뒤 다리 위쪽과 아래쪽을 각각 return 한다.
   */
  move(upOrDown, state) {
    this.divideSpace();
    if (state) return this.pass(state, upOrDown);
    return this.fail(state, upOrDown);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  retry() {
    this.resetData();
    this.#tryCount += 1;
  }

  resetData() {
    this.resetBridgeStatus();
    this.resetBridgeData();
  }
  resetBridgeStatus() {
    this.#bridgeStatus.up = '';
    this.#bridgeStatus.down = '';
  }

  resetBridgeData() {
    Object.keys(this.#bridgeData).forEach((key) => {
      this.#bridgeData[key] = null;
    });
  }

  pass(state, upOrDown) {
    if (upOrDown === BRIDGE_GAME.up) {
      this.moveToUp(state);
      return this.getUpAndDown();
    }
    this.moveToDown(state);
    return this.getUpAndDown();
  }

  fail(state, upOrDown) {
    if (upOrDown === BRIDGE_GAME.up) {
      this.moveToUp(state);
      return this.getUpAndDown();
    }
    this.moveToDown(state);
    return this.getUpAndDown();
  }

  moveToUp(state) {
    const passOrFail = state ? BRIDGE_GAME.pass : BRIDGE_GAME.fail;
    this.#bridgeStatus.up += `${BRIDGE_GAME.space}${passOrFail}${BRIDGE_GAME.space}`;
    this.#bridgeStatus.down += `${BRIDGE_GAME.space}${BRIDGE_GAME.space}${BRIDGE_GAME.space}`;
  }

  moveToDown(state) {
    const passOrFail = state ? BRIDGE_GAME.pass : BRIDGE_GAME.fail;
    this.#bridgeStatus.up += `${BRIDGE_GAME.space}${BRIDGE_GAME.space}${BRIDGE_GAME.space}`;
    this.#bridgeStatus.down += `${BRIDGE_GAME.space}${passOrFail}${BRIDGE_GAME.space}`;
  }

  getUpAndDown() {
    const { up, down } = this.#bridgeStatus;
    return { up, down };
  }

  saveSize(input) {
    this.#size = Number(input);
  }

  isAllPass() {
    return this.#bridgeData.order === this.#size;
  }

  increaseTryOrder() {
    this.#bridgeData.order += 1;
  }

  isSamePreBuiltBridgeAsInput(input) {
    if (this.#bridgeData.order === null) this.#bridgeData.order = 0;
    return this.#prebuilt[this.#bridgeData.order] === input;
  }

  saveUpOrDown(input) {
    this.#bridgeData.upOrDown = input;
  }

  precompose(size) {
    this.#prebuilt = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  getData() {
    const { up, down } = this.#bridgeStatus;
    const tryCount = this.#tryCount;
    return { up, down, tryCount };
  }

  divideSpace() {
    if (this.#bridgeStatus.up.length) {
      this.#bridgeStatus.up += BRIDGE_GAME.divide;
      this.#bridgeStatus.down += BRIDGE_GAME.divide;
    }
  }
}

module.exports = BridgeGame;
