const BrideMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #userPath = [];
  #currentBridge = { upPath: [], downPath: [] };
  #totalCount = 0;

  constructor(size) {
    this.#bridge = BrideMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userMove) {
    this.#userPath.push(userMove);
    userMove === "U" ? this.updateUpPath() : this.updateDownPath();
  }

  checkUserPath() {
    const current = this.#userPath.length - 1;
    if (this.#userPath[current] === this.#bridge[current]) return true;
    return false;
  }

  updateUpPath() {
    this.checkUserPath()
      ? (this.#currentBridge.upPath.push(" O "),
        this.#currentBridge.downPath.push("   "))
      : (this.#currentBridge.upPath.push(" X "),
        this.#currentBridge.downPath.push("   "));
  }

  updateDownPath() {
    this.checkUserPath()
      ? (this.#currentBridge.downPath.push(" O "),
        this.#currentBridge.upPath.push("   "))
      : (this.#currentBridge.downPath.push(" X "),
        this.#currentBridge.upPath.push("   "));
  }

  getUserPath() {
    return this.#userPath;
  }

  getBridge() {
    return this.#bridge;
  }

  getFinish() {
    return this.#userPath.length === this.#bridge.length;
  }

  getCurrentBridge() {
    return this.#currentBridge;
  }

  getCount() {
    return this.#totalCount;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#userPath = [];
    this.#currentBridge = { upPath: [], downPath: [] };
    this.#totalCount++;
  }
}

module.exports = BridgeGame;
