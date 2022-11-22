const { BRIDGE_MAP } = require("./utils/Constants");
const OutputView = require("./OutputView");

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

  showResult() {
    OutputView.printMap(this.#upsideBridge, this.#downsideBridge);
  }

  showFinalResult(upsideBridge, downsideBridge, gameState) {
    OutputView.printResult(upsideBridge, downsideBridge, gameState);
  }
}

module.exports = Bridge;
