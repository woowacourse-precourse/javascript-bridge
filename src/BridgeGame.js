const BridgeMaker = require("./BridgeMaker");
const BridgeRandomGenerator = require("./BridgeRandomNumberGenerator");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  #map;
  #bridge;
  #phase;
  #try;
  #result;

  constructor(size) {
    this.#map = {
      upStair: [],
      downStair: [],
    };
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomGenerator.generate);
    this.#phase = 1;
    this.#try = 1;
    this.#result = "실패";
  }

  pushResult(direction) {
    let result = { U: " ", D: " " };
    this.#bridge[this.#phase - 1] === direction
      ? (result[direction] = "O")
      : (result[direction] = "X");
    this.#map.upStair.push(result.U);
    this.#map.downStair.push(result.D);
    return this.#map;
  }

  getMap() {
    return this.#map;
  }

  getResult() {
    return this.#result;
  }

  getTry() {
    return this.#try;
  }

  isRight() {
    const upValues = Object.values(this.#map.upStair);
    const downValues = Object.values(this.#map.downStair);
    if (upValues.includes("X") || downValues.includes("X")) {
      this.#phase = 1;
      return false;
    }
    return true;
  }

  isEnd() {
    if (this.#phase === this.#bridge.length) {
      this.#result = "성공";
      return true;
    }
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    return (this.#phase += 1);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#phase = 1;
    this.#map = {
      upStair: [],
      downStair: [],
    };
    this.#try += 1;
  }
}

module.exports = BridgeGame;
