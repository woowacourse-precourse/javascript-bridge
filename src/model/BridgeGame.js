const { generate } = require("../utils/BridgeRandomNumberGenerator");
const Bridge = require("../Bridge");
const BridgeMaker = require("../BridgeMaker");

class BridgeGame {
  #bridge;
  #bridgeIndex;
  #bridgeArray;
  #state = {
    round: 1,
    result: "",
  };

  constructor() {
    this.#bridge = new Bridge();
    this.#bridgeIndex = 0;
  }

  makeBridge(bridgeSize) {
    this.#bridgeArray = BridgeMaker.makeBridge(bridgeSize, generate);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  isMovable() {
    let canMove = true;
    if (this.#bridge.hasX()) canMove = false;
    if (!this.#bridge.hasValidLength(this.#bridgeArray, this.#bridgeIndex))
      canMove = false;
    return canMove;
  }

  move(moving) {
    this.#bridge.setBridge(this.#bridgeArray, this.#bridgeIndex++, moving);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {
    this.#bridge.setInitial();
    this.#state.round += 1;
    this.#bridgeIndex = 0;
  }

  /**
   * 게임을 진행 결과를 알려줄 때 사용하는 메서드
   */
  setState(result) {
    this.#state.result = result;
  }

  getState() {
    return this.#state;
  }

  loseGame() {
    return this.#bridge.hasX();
  }

  getResultBridge() {
    return [this.#bridge.getUpsideBridge(), this.#bridge.getDownsideBridge()];
  }
}

module.exports = BridgeGame;
