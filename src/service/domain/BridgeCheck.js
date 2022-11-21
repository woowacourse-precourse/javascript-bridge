const { MODEL_KEY, GAME_RESULT_STATE } = require('../../utils/constants');

class BridgeFinalResult {
  #repo;

  constructor({ repo }) {
    this.#repo = repo;
  }

  #getRepoData() {
    return {
      randomBridge: this.#repo.read(MODEL_KEY.randomBridge),
      userBridge: this.#repo.read(MODEL_KEY.userBridge),
      tryCount: this.#repo.read(MODEL_KEY.tryCount)
    };
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

  getOutput() {
    const tries = { tryCount: this.#getRepoData().tryCount };

    if (this.#isFinish() && this.#isCorrect())
      return { ...tries, result: GAME_RESULT_STATE.success };
    if (this.#isCorrect()) return { ...tries, result: GAME_RESULT_STATE.try };

    return { ...tries, result: GAME_RESULT_STATE.fail };
  }
}

module.exports = BridgeFinalResult;
