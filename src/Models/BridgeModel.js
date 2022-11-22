const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { INPUT, BRIDGE } = require('../Constants');

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
    if (userMove === INPUT.UP) {
      this.#upsideBridge += BRIDGE.SUCESS;
      this.#downSideBridge += BRIDGE.NOTHING;
    }
    if (userMove === INPUT.DOWN) {
      this.#upsideBridge += BRIDGE.NOTHING;
      this.#downSideBridge += BRIDGE.SUCESS;
    }
    return true;
  }

  death(userMove) {
    if (userMove === INPUT.UP) {
      this.#upsideBridge += BRIDGE.FAIL;
      this.#downSideBridge += BRIDGE.NOTHING;
    }
    if (userMove === INPUT.DOWN) {
      this.#upsideBridge += BRIDGE.NOTHING;
      this.#downSideBridge += BRIDGE.FAIL;
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
