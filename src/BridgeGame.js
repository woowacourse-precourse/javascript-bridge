const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { BRIDGE } = require("./constants/constants");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeLength;
  #trial;
  #bridge;
  #bridgeState;
  #currentLocation;
  #isFail;
  #isSuccess;

  constructor() {
    this.#bridgeLength = 0;
    this.#trial = 0;
    this.#bridge = [];
    this.#bridgeState = [[], []];
    this.#currentLocation = 0;
    this.#isFail = false;
    this.#isSuccess = false;
  }

  initBridgeState() {
    this.#bridgeState = [[], []];
  }

  initGame(userInput) {
    this.#bridgeLength = userInput;
  }
  setBridge() {
    const bridge = BridgeMaker.makeBridge(
      this.#bridgeLength,
      BridgeRandomNumberGenerator.generate
    );
    this.#bridge = bridge;
    this.try();
  }

  getBridgeState() {
    return this.#bridgeState;
  }

  changeBridgeState(userInput, result) {
    if (userInput === BRIDGE.UP) {
      this.#bridgeState[BRIDGE.UP].push(result);
      this.#bridgeState[BRIDGE.DOWN].push(BRIDGE.SPACE);
    }
    if (userInput === BRIDGE.DOWN) {
      this.#bridgeState[BRIDGE.DOWN].push(result);
      this.#bridgeState[BRIDGE.UP].push(BRIDGE.SPACE);
    }
  }

  try() {
    this.#trial += 1;
  }

  fail() {
    this.#isFail = true;
  }

  success() {
    this.#isSuccess = true;
  }

  getGameState() {
    return { isFail: this.#isFail, isSuccess: this.#isSuccess };
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userInput) {
    const answer = this.#bridge[this.#currentLocation];
    if (userInput === answer) {
      this.changeBridgeState(userInput, BRIDGE.SUCCESS);
    }
    if (userInput !== answer) {
      this.changeBridgeState(userInput, BRIDGE.FAIL);
      this.fail();
    }
    this.#currentLocation += 1;
    if (this.#currentLocation === this.#bridgeLength - 1 && !this.#isFail) {
      this.success();
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
