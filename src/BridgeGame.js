const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const Command = require("./constants/Command");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #crossBridge;

  constructor() {
    this.#crossBridge = [[], []];
  }

  /**
   * 다리를 생성하는 메서드
   * @param {number} size 다리길이
   */
  setBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size, generate);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} moving 이동할 위치 U혹은 D
   * @return {number, stringp[][]}
   */
  move(moving) {
    const isSuccess = this.checkBridge(moving);
    this.updateBirdge(isSuccess);
    return [isSuccess, this.#crossBridge];
  }

  /**
   * 성공여부에 따른 다리상태 업데이트하는 메서드
   * @param {number} isSuccess
   */
  updateBirdge(isSuccess) {
    const next = this.#bridge[this.#crossBridge[0].length];
    const [right, wrong] = next === Command.DOWN ? [1, 0] : [0, 1];
    this.#crossBridge[right].push(isSuccess ? " O " : "   ");
    this.#crossBridge[wrong].push(isSuccess ? "   " : " X ");
  }

  /**
   * 이동할 위치가 건널 수 있는지 확인하는 메서드
   * @param {string} moving 이동할 위치 U혹은 D
   * @returns {number} 0: 실패, 1: 성공, 2: 도착지에 도착
   */
  checkBridge(moving) {
    if (this.#bridge[this.#crossBridge[0].length] !== moving) return 0;
    if (this.#crossBridge[0].length + 1 === this.#bridge.length) return 2;
    return 1;
  }

  /**
   * 현재까지 건너온 다리 상태 반환 메서드
   * @returns {string[][]} 건너온 다리 상태
   */
  getBridge() {
    return [[...this.#crossBridge[0]], [...this.#crossBridge[1]]];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * @param {number} tryCount 현재까지 시도한 횟수
   * @return {number} 현재까지 시도한 횟수 + 1
   */
  retry(tryCount) {
    this.#crossBridge = [[], []];
    return tryCount + 1;
  }
}

module.exports = BridgeGame;
