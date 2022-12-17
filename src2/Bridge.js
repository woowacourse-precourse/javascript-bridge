const Generater = require('../src/BridgeRandomNumberGenerator');
const BridgeMaker = require('../src/BridgeMaker');

class Bridge {
  #bridgeController;
  #originalBridge;
  #bridges = {
    U: [],
    D: [],
  };

  constructor(bridgeController) {
    this.#bridgeController = bridgeController;
  }

  buildBridge(size) {
    const numberGenerator = Generater.generate;
    const bridge = BridgeMaker.makeBridge(size, numberGenerator);
    this.setOriginalBridge(bridge);
    console.log(this.#originalBridge, '디스오리진');
  }

  getIndex() {
    return this.#bridges.U.length;
  }

  setOriginalBridge(bridge) {
    this.#originalBridge = bridge;
  }

  move(direction) {
    this.setBridges(direction);
    this.setOtherSideEmpty(direction);
  }

  setBridges(direction) {
    const index = this.getIndex();
    const currentPosition = this.#originalBridge[index];

    if (currentPosition === direction) this.#bridges[direction].push('O');
    if (currentPosition !== direction) this.#bridges[direction].push('X');
  }

  setOtherSideEmpty(direction) {
    if (direction === 'U') this.#bridges.D.push('N');
    if (direction === 'D') this.#bridges.U.push('N');
  }
}

module.exports = Bridge;
