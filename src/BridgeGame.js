const Bridge = require("./Bridge");
const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const Command = require("./constants/Command");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.bridge = new Bridge();
  }

  /**
   * 다리를 생성하는 메서드
   * @param {number} size 다리길이
   */
  setBridge(size) {
    const bridgeMake = BridgeMaker.makeBridge(size, generate);
    this.bridge.setBridge(bridgeMake);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} moving 이동할 위치 U혹은 D
   * @return {number} 0: 실패, 1: 성공, 2: 도착지에 도착
   */
  move(moving) {
    const isSuccess = this.checkBridge(moving);
    this.updateBirdge(isSuccess);
    return isSuccess;
  }

  /**
   * 성공여부에 따른 다리상태 업데이트하는 메서드
   * @param {number} isSuccess
   */
  updateBirdge(isSuccess) {
    const next = this.bridge.getBridge()[this.bridge.getCrossBridgeSize()];
    const [right, wrong] = next === Command.DOWN ? [1, 0] : [0, 1];
    const crossBridge = this.bridge.getCrossBridge();
    crossBridge[right].push(isSuccess ? " O " : "   ");
    crossBridge[wrong].push(isSuccess ? "   " : " X ");
    this.bridge.setCrossBridge(crossBridge);
  }

  /**
   * 이동할 위치가 건널 수 있는지 확인하는 메서드
   * @param {string} moving 이동할 위치 U혹은 D
   * @returns {number} 0: 실패, 1: 성공, 2: 도착지에 도착
   */
  checkBridge(moving) {
    const bridge = this.bridge.getBridge();
    const crossBridge = this.bridge.getCrossBridge();
    if (bridge[crossBridge[0].length] !== moving) return 0;
    if (crossBridge[0].length + 1 === bridge.length) return 2;
    return 1;
  }

  /**
   * 현재까지 건너온 다리 상태 반환 메서드
   * @returns {string[][]} 건너온 다리 상태
   */
  getBridge() {
    return this.bridge.getCrossBridge();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * @param {number} tryCount 현재까지 시도한 횟수
   * @return {number} 현재까지 시도한 횟수 + 1
   */
  retry(tryCount) {
    // this.#crossBridge = [[], []];
    return tryCount + 1;
  }
}

module.exports = BridgeGame;
