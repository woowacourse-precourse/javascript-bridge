const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #BridgeData = {
    size: null,
    tryCount: 1,
    tryOrder: 0,
    up: '',
    down: '',
    upOrDown: null,
    state: null,
    prebuilt: null,
  };

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
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
    this.#BridgeData.up = '';
    this.#BridgeData.down = '';
    this.#BridgeData.tryOrder = 0;
    this.#BridgeData.tryCount += 1;
  }

  static end() {
    Console.close();
  }

  pass(state, upOrDown) {
    if (upOrDown === 'U') {
      this.moveToUp(state);
      return [upOrDown, this.#BridgeData.up, this.#BridgeData.down];
    }
    this.moveToDown(state);
    return [upOrDown, this.#BridgeData.up, this.#BridgeData.down];
  }

  fail(state, upOrDown) {
    if (upOrDown === 'U') {
      this.moveToUp(state);
      return [upOrDown, this.#BridgeData.up, this.#BridgeData.down];
    }
    this.moveToDown(state);
    return [upOrDown, this.#BridgeData.up, this.#BridgeData.down];
  }

  moveToUp(state) {
    const passOrFail = state ? 'O' : 'X';
    this.#BridgeData.up += ` ${passOrFail} `;
    this.#BridgeData.down += '   ';
  }

  moveToDown(state) {
    const passOrFail = state ? 'O' : 'X';
    this.#BridgeData.up += '   ';
    this.#BridgeData.down += ` ${passOrFail} `;
  }

  static isRetry(input) {
    const RETRY = 1;
    if (input === RETRY) {
    }
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
    this.#BridgeData.prebuilt = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
  }
  getDate() {
    return this.#BridgeData;
  }

  divideSpace() {
    if (this.#BridgeData.up.length) {
      this.#BridgeData.up += '|';
      this.#BridgeData.down += '|';
    }
  }
}

module.exports = BridgeGame;
