const {
  MODEL_KEY,
  UPDOWN_INDEX,
  GAME_RESULT_STATE
} = require('../../utils/constants');

class BridgeCheck {
  #repo;

  constructor({ repo }) {
    this.#repo = repo;
  }

  #getRepoData() {
    const randomBridge = this.#repo.read(MODEL_KEY.randomBridge);
    const userBridge = this.#repo.read(MODEL_KEY.userBridge);
    const tryCount = this.#repo.read(MODEL_KEY.tryCount);

    return { randomBridge, userBridge, tryCount };
  }

  #getBridgeCheckingOX() {
    const { randomBridge, userBridge } = this.#getRepoData();
    const randomSlice = randomBridge.slice(0, userBridge.length);

    return userBridge.map((bridgeItem, index) =>
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
    const { randomBridge, userBridge } = this.#getRepoData();

    return userBridge.length === randomBridge.length;
  }

  #isCorrect() {
    const { randomBridge, userBridge } = this.#getRepoData();

    return randomBridge
      .slice(0, userBridge.length)
      .every((bridgeItem, index) => bridgeItem === userBridge[index]);
  }

  getGameState() {
    const tries = { tryCount: this.#getRepoData().tryCount };

    if (this.#isFinish() && this.#isCorrect())
      return { ...tries, result: GAME_RESULT_STATE.success };
    if (this.#isCorrect()) return { ...tries, result: GAME_RESULT_STATE.try };

    return { ...tries, result: GAME_RESULT_STATE.fail };
  }
}

module.exports = BridgeCheck;
