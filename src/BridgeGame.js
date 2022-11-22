const BridgeMaker = require("./BridgeMaker");
const Random = require("./BridgeRandomNumberGenerator");
const { BRIDGE, BRIDGE_INDEX, BRIDGE_FORMAT } = require("./Utils/Constants");

class BridgeGame {
  #userLocation;
  #bridge;
  #currBridge;
  #bridgeSize;
  #trial;
  #fail;
  #gameWin;

  constructor() {
    this.#userLocation = -1;
    this.#bridge = [];
    this.initCurrBridge();
    this.#trial = 0;
    this.#bridgeSize = 0;
    this.#fail = false;
    this.#gameWin = false;
  }

  initCurrBridge() {
    this.#currBridge = [];
    this.#currBridge.push([]);
    this.#currBridge.push([]);
  }

  setBridgeSize(size) {
    this.#bridgeSize = Number(size);
  }

  setBridge() {
    const bridge = BridgeMaker.makeBridge(this.#bridgeSize, Random.generate);
    this.#bridge = bridge;
  }

  getCurrBridge() {
    return this.#currBridge;
  }

  getFailFlag() {
    return this.#fail;
  }

  getGameWinFlag() {
    return this.#gameWin;
  }

  getTrial() {
    return this.#trial;
  }

  prepareGame(bridgeSize) {
    this.setBridgeSize(bridgeSize);
    this.setBridge();
    this.increaseTrial();
  }

  move(bridgeChoice) {
    this.#userLocation++;
    const answer = this.#bridge[this.#userLocation];
    if (bridgeChoice === answer) {
      this.updateCurrBridge(bridgeChoice, BRIDGE_FORMAT.SUCCESS);
    }
    if (bridgeChoice !== answer) {
      this.updateCurrBridge(bridgeChoice, BRIDGE_FORMAT.FAIL);
      this.#fail = true;
    }
    if (this.#userLocation === this.#bridgeSize - 1 && !this.#fail) {
      this.#gameWin = true;
    }
  }

  updateCurrBridge(bridgeChoice, result) {
    if (bridgeChoice === BRIDGE.UP) {
      this.#currBridge[BRIDGE_INDEX.DOWN].push(BRIDGE_FORMAT.EMPTY);
      this.#currBridge[BRIDGE_INDEX.UP].push(result);
    }
    if (bridgeChoice === BRIDGE.DOWN) {
      this.#currBridge[BRIDGE_INDEX.DOWN].push(result);
      this.#currBridge[BRIDGE_INDEX.UP].push(BRIDGE_FORMAT.EMPTY);
    }
  }

  increaseTrial() {
    this.#trial++;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.increaseTrial();
    this.#fail = false;
    this.#userLocation = -1;
    this.initCurrBridge();
  }
}

module.exports = BridgeGame;
