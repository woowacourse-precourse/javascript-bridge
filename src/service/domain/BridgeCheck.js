const { MODEL_KEY } = require('../../utils/constants');

class BridgeCheck {
  #repo;

  #INDEX = {
    U: 0,
    D: 1
  };

  constructor({ repo }) {
    this.#repo = repo;
  }

  #getBridgesForCompare() {
    const useBridge = this.#repo.read(MODEL_KEY.userBridge);
    const randomBridgeSlice = this.#repo
      .read(MODEL_KEY.randomBridge)
      .slice(0, useBridge.length);

    return { useBridge, randomBridgeSlice };
  }

  #getBridgeCheckingOX() {
    const { useBridge, randomBridgeSlice } = this.#getBridgesForCompare();

    return useBridge.map((bridgeItem, index) =>
      bridgeItem === randomBridgeSlice[index]
        ? ['O', this.#INDEX[bridgeItem]]
        : ['X', this.#INDEX[bridgeItem]]
    );
  }

  getUserBridgeState() {
    const checkingOXBridge = this.#getBridgeCheckingOX();

    return [
      checkingOXBridge.map(([ox, position]) => (position === 0 ? ox : '')),
      checkingOXBridge.map(([ox, position]) => (position === 1 ? ox : ''))
    ];
  }

  #isSuccess() {
    const randomBridge = this.#repo.read(MODEL_KEY.randomBridge);
    const { useBridge, randomBridgeSlice } = this.#getBridgesForCompare();

    if (randomBridge.length !== useBridge.length) return false;

    return randomBridgeSlice.every(
      (bridgeItem, index) => bridgeItem === useBridge[index]
    );
  }

  #isTry() {
    const { useBridge, randomBridgeSlice } = this.#getBridgesForCompare();

    return randomBridgeSlice.every(
      (bridgeItem, index) => bridgeItem === useBridge[index]
    );
  }

  getGameState() {
    if (this.#isSuccess()) return 'success';
    if (this.#isTry()) return 'try';

    return 'fail';
  }
}

module.exports = BridgeCheck;
