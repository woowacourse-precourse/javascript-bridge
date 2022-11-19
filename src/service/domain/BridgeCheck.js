const { MODEL_KEY, UPDOWN_INDEX } = require('../../utils/constants');

class BridgeCheck {
  #randomBridge;

  #userBridge;

  constructor({ repo }) {
    this.#randomBridge = repo.read(MODEL_KEY.randomBridge);
    this.#userBridge = repo.read(MODEL_KEY.userBridge);
  }

  #getBridgeCheckingOX() {
    const randomSlice = this.#randomBridge.slice(0, this.#userBridge.length);

    return this.#userBridge.map((bridgeItem, index) =>
      bridgeItem === randomSlice[index]
        ? ['O', UPDOWN_INDEX[bridgeItem]]
        : ['X', UPDOWN_INDEX[bridgeItem]]
    );
  }

  getUserBridgeState() {
    const checkingOXBridge = this.#getBridgeCheckingOX();

    return [
      checkingOXBridge.map(([ox, position]) => (position === 0 ? ox : '')),
      checkingOXBridge.map(([ox, position]) => (position === 1 ? ox : ''))
    ];
  }

  #isFinish() {
    return this.#userBridge.length === this.#randomBridge.length;
  }

  #isCorrect() {
    return this.#randomBridge
      .slice(0, this.#userBridge.length)
      .every((bridgeItem, index) => bridgeItem === this.#userBridge[index]);
  }

  getGameState() {
    if (this.#isFinish() && this.#isCorrect()) return 'success';
    if (this.#isCorrect()) return 'try';

    return 'fail';
  }
}

module.exports = BridgeCheck;
