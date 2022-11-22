const { COMMAND, RESULT, } = require("./BridgeConstant");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #moving = [];
  #count = 1;

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  move(moving) {
    this.#moving.push(moving);
  }

  isFail() {
    const stage = this.#moving.length - 1;
    if (this.#moving[stage] !== this.#bridge[stage]) {
      return true;
    }
    return false;
  };

  isSuccess() {
    if(!this.isFail() && this.#bridge.length === this.#moving.length) {
      return true;
    }
    return false;
  }

  getMoveResult() {
    const upBridge = Array.from({length: this.#moving.length}, () => RESULT.BLANK);
    const downBridge = Array.from({length: this.#moving.length}, () => RESULT.BLANK);
    this.#moving.forEach((answer, idx) => {
      if (answer === COMMAND.UP && answer === this.#bridge[idx]) upBridge[idx] = RESULT.SUCCESS;
      if (answer === COMMAND.UP && answer !== this.#bridge[idx]) upBridge[idx] = RESULT.FAIL;
      if (answer === COMMAND.DOWN && answer === this.#bridge[idx]) downBridge[idx] = RESULT.SUCCESS;
      if (answer === COMMAND.DOWN && answer !== this.#bridge[idx]) downBridge[idx] = RESULT.FAIL;
    })
    return { upBridge, downBridge };
  }

  getGameResult() {
    return {
      upBridge: this.getMoveResult().upBridge,
      downBridge: this.getMoveResult().downBridge,
      isSuccess: this.isSuccess(),
      count: this.#count
    }
  }

  retry() {
    this.#moving = [];
    this.#count += 1;
  }
}

module.exports = BridgeGame;
