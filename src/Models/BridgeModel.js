const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

const { generate } = BridgeRandomNumberGenerator;

class Model {
  #bridge;
  #upsideBridge = '';
  #downSideBridge = '';

  genBridge(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(+bridgeSize, generate);
  }

  aliveOrDeath(userMove, turn) {
    if (userMove === this.#bridge[turn]) {
      return this.alive(userMove);
    }
    if (userMove !== this.#bridge[turn]) {
      return this.death(userMove);
    }
  }

  alive(userMove) {
    if (userMove === 'U') {
      this.#upsideBridge += ' O |';
      this.#downSideBridge += '   |';
    }
    if (userMove === 'D') {
      this.#upsideBridge += '   |';
      this.#downSideBridge += ' O |';
    }
    return true;
  }

  death(userMove) {
    if (userMove === 'U') {
      this.#upsideBridge += ' X |';
      this.#downSideBridge += '   |';
    }
    if (userMove === 'D') {
      this.#upsideBridge += '   |';
      this.#downSideBridge += ' X |';
    }
    return false;
  }

  reset() {
    this.#upsideBridge = '';
    this.#downSideBridge = '';
  }

  get bridge() {
    return this.#bridge;
  }

  get upsideBridge() {
    return this.#upsideBridge;
  }

  get downSideBridge() {
    return this.#downSideBridge;
  }
}

module.exports = Model;
