const { BRIDGE_MAP } = require("./utils/Constants");
const OutputView = require("./view/OutputView");

class Bridge {
  #upsideBridge = [];
  #downsideBridge = [];

  setInitial() {
    this.#upsideBridge = [];
    this.#downsideBridge = [];
  }

  getUpsideBridge() {
    return this.#upsideBridge;
  }

  getDownsideBridge() {
    return this.#downsideBridge;
  }

  getResultBridge() {
    return [this.getUpsideBridge(), this.getDownsideBridge()];
  }

  hasX() {
    return (
      this.#upsideBridge.includes(BRIDGE_MAP.fail) ||
      this.#downsideBridge.includes(BRIDGE_MAP.fail)
    );
  }

  hasValidLength(bridgeArray, index) {
    return bridgeArray.length > index;
  }

  /**
   * 입력받은 이동할 칸을 이동하는 메서드
   */
  setBridge(bridgeArray, bridgeIndex, moving) {
    if (moving === BRIDGE_MAP.up_moving)
      this.setUpsideBridge(bridgeArray, bridgeIndex, moving);
    if (moving === BRIDGE_MAP.down_moving)
      this.setDownsideBridge(bridgeArray, bridgeIndex, moving);

    this.showResult(this.#upsideBridge, this.#downsideBridge);
  }

  setUpsideBridge(bridgeArray, bridgeIndex, moving) {
    if (bridgeArray[bridgeIndex] === moving)
      this.#upsideBridge.push(BRIDGE_MAP.pass);

    if (bridgeArray[bridgeIndex] !== moving)
      this.#upsideBridge.push(BRIDGE_MAP.fail);

    this.#downsideBridge.push(BRIDGE_MAP.empty);
  }

  setDownsideBridge(bridgeArray, bridgeIndex, moving) {
    if (bridgeArray[bridgeIndex] === moving)
      this.#downsideBridge.push(BRIDGE_MAP.pass);

    if (bridgeArray[bridgeIndex] !== moving)
      this.#downsideBridge.push(BRIDGE_MAP.fail);

    this.#upsideBridge.push(BRIDGE_MAP.empty);
  }

  /**
   * 현재까지 이동한 다리의 상태와 최종 결과를 보여주는 메서드
   */
  showResult() {
    OutputView.printMap(this.#upsideBridge, this.#downsideBridge);
  }

  showFinalResult(upsideBridge, downsideBridge, gameState) {
    OutputView.printResult(upsideBridge, downsideBridge, gameState);
  }
}

module.exports = Bridge;
