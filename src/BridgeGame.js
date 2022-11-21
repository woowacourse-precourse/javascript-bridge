const BridgeMaker = require("./BridgeMaker");
const Random = require("./BridgeRandomNumberGenerator");
const Validate = require("./Validation");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #userLocation;
  #bridge;
  #bridgeSize;
  #userLog;
  #trial;

  constructor() {
    this.#userLocation = 0;
    this.#bridge = [];
    this.#userLog = [];
    this.#trial = 0;
    this.#bridgeSize = 0;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  setBridgeSize(size) {
    //Validate.bridgeSize(size);
    this.#bridgeSize = Number(size);
    console.log(this.#bridgeSize);
  }

  setBridge() {
    const bridge = BridgeMaker.makeBridge(this.#bridgeSize, Random.generate);
    this.#bridge = bridge;
    console.log(this.#bridge);
  }

  increaseTrial() {
    this.#trial++;
  }

  move(bridgeChoice) {
    //Validate.bridgeChoice(bridgeChoice);
    this.#userLog.push(bridgeChoice);
    this.#userLocation++;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
