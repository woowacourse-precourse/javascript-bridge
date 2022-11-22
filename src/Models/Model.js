const Validation = require('../Utilities/Validation');
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
    console.log('bridge: ', this.#bridge);
  }

  aliveOrDeath(userMove, turn) {
    let life = true;
    if (userMove === this.#bridge[turn]) {
      this.alive(userMove);
    }
    if (userMove !== this.#bridge[turn]) {
      this.death(userMove);
      life = false;
    }
    return life;
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
