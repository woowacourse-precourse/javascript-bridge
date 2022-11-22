const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const { BRIDGE_GAME } = require("../Constants");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * @member { number } size - 다리 길이
   * @member { number } tryCount - 시도한 횟수
   * @member { number } tryOrder - 대조하는 순서
   * @member { string } up - 위쪽 다리 map
   * @member { string } down - 아래쪽 다리 map
   * @member { string } upOrDown - 위쪽인지 아래쪽인지 택 1
   * @member { number } state - 이동할 수 있는 칸이면 1 이동할 수 없는 칸이면 0
   * @member { string[] } prebuilt - 미리 만들어진 다리
   */
  #BridgeData = {
    size: null,
    tryCount: 1,
    tryOrder: 0,
    up: "",
    down: "",
    upOrDown: null,
    state: null,
    prebuilt: null,
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
    this.#BridgeData.up = "";
    this.#BridgeData.down = "";
    this.#BridgeData.tryOrder = 0;
    this.#BridgeData.tryCount += 1;
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
    this.#BridgeData.up += `${BRIDGE_GAME.space}${passOrFail}${BRIDGE_GAME.space}`;
    this.#BridgeData.down += `${BRIDGE_GAME.space}${BRIDGE_GAME.space}${BRIDGE_GAME.space}`;
  }

  moveToDown(state) {
    const passOrFail = state ? BRIDGE_GAME.pass : BRIDGE_GAME.fail;
    this.#BridgeData.up += `${BRIDGE_GAME.space}${BRIDGE_GAME.space}${BRIDGE_GAME.space}`;
    this.#BridgeData.down += `${BRIDGE_GAME.space}${passOrFail}${BRIDGE_GAME.space}`;
  }

  getUpAndDown() {
    const { up, down } = this.#BridgeData;
    return { up, down };
  }

  saveSize(input) {
    this.#BridgeData.size = Number(input);
  }

  isAllPass() {
    return this.#BridgeData.tryOrder === this.#BridgeData.size;
  }

  returnBridgeData() {
    return this.#BridgeData;
  }

  increaseTryOrder() {
    this.#BridgeData.tryOrder += 1;
  }

  isSamePreBuiltBridgeAsInput(input) {
    return this.#BridgeData.prebuilt[this.#BridgeData.tryOrder] === input;
  }

  saveUpOrDown(input) {
    this.#BridgeData.upOrDown = input;
  }

  precompose(size) {
    this.#BridgeData.prebuilt = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  getDate() {
    return this.#BridgeData;
  }

  divideSpace() {
    if (this.#BridgeData.up.length) {
      this.#BridgeData.up += BRIDGE_GAME.divide;
      this.#BridgeData.down += BRIDGE_GAME.divide;
    }
  }
}

module.exports = BridgeGame;
