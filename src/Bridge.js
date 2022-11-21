const OutputView = require("./OutputView");

class Bridge {
  #upsideBridge;
  #downsideBridge;

  constructor() {
    this.#upsideBridge = [];
    this.#downsideBridge = [];
    // this.#bridgeArray = BridgeMaker.makeBridge(bridgeSize, generate);
  }

  hasX() {
    return (
      this.#upsideBridge.includes(" X ") || this.#downsideBridge.includes(" X ")
    );
  }

  hasValidLength(bridgeArray, index) {
    return bridgeArray.length > index;
  }

  setBridge(bridgeArray, bridgeIndex, moving) {
    console.log("setBridge", bridgeArray, bridgeIndex, moving);
    if (moving === "U") this.setUpsideBridge(bridgeArray, bridgeIndex, moving);
    if (moving === "D")
      this.setDownsideBridge(bridgeArray, bridgeIndex, moving);

    this.showResult(this.#upsideBridge, this.#downsideBridge);
  }

  setUpsideBridge(bridgeArray, bridgeIndex, moving) {
    if (bridgeArray[bridgeIndex] === moving) {
      this.#upsideBridge.push(" O ");
    }
    if (bridgeArray[bridgeIndex] !== moving) {
      console.log("UpX");
      this.#upsideBridge.push(" X ");
    }
    this.#downsideBridge.push("   ");
  }

  setDownsideBridge(bridgeArray, bridgeIndex, moving) {
    if (bridgeArray[bridgeIndex] === moving) {
      this.#downsideBridge.push(" O ");
    }
    if (bridgeArray[bridgeIndex] !== moving) {
      this.#downsideBridge.push(" X ");
    }
    this.#upsideBridge.push("   ");
  }

  showResult() {
    OutputView.printMap(this.#upsideBridge, this.#downsideBridge);
  }
}

module.exports = Bridge;
