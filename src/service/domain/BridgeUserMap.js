const {
  MODEL_KEY,
  BRIDGE_DIRECTION,
  BRIDGE_CHECK
} = require('../../utils/constants');

class BridgeUserMap {
  #repo;

  constructor({ repo }) {
    this.#repo = repo;
  }

  #getRepoData() {
    return {
      randomBridge: this.#repo.read(MODEL_KEY.randomBridge),
      userBridge: this.#repo.read(MODEL_KEY.userBridge)
    };
  }

  #getBridgeCheckingOX() {
    const { randomBridge, userBridge } = this.#getRepoData();
    const randomSlice = randomBridge.slice(0, userBridge.length);

    return userBridge.map((bridgeItem, index) =>
      bridgeItem === randomSlice[index]
        ? [BRIDGE_CHECK.right, bridgeItem]
        : [BRIDGE_CHECK.wrong, bridgeItem]
    );
  }

  #makeOneBridgeFor(direction) {
    const checkingOXBridge = this.#getBridgeCheckingOX();

    return checkingOXBridge.map(([ox, position]) =>
      position === direction ? ox : BRIDGE_CHECK.blank
    );
  }

  getOutput() {
    return [
      this.#makeOneBridgeFor(BRIDGE_DIRECTION.up),
      this.#makeOneBridgeFor(BRIDGE_DIRECTION.down)
    ];
  }
}

module.exports = BridgeUserMap;
