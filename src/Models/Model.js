const Validation = require('../Utilities/Validation');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

const { generate } = BridgeRandomNumberGenerator;

class Model {
  #bridge;
  #upsideBridge = '';
  #downSideBridge = '';

  genBridge(bridgeSize) {
    Validation.isBridgeSizeValid(bridgeSize);
    this.#bridge = BridgeMaker.makeBridge(+bridgeSize, generate);
    console.log(this.#bridge);
  }

  aliveOrDeath(userMove, turn) {
    let life = true;
    Validation.isUserMoveValid(userMove);
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
    if (userMove === 'U') {
      this.#upsideBridge += ' O |';
      this.#downSideBridge += '   |';
    }
    if (userMove === 'D') {
      this.#upsideBridge += '   |';
      this.#downSideBridge += ' O |';
    }
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
