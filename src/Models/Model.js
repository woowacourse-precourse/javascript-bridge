const Validation = require('../Utilities/Validation');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

const { generate } = BridgeRandomNumberGenerator;

class Model {
  #bridge;
  #upperBridge = '';
  #lowerBridge = '';

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
      this.#upperBridge += ' O |';
      this.#lowerBridge += '   |';
    }
    if (userMove === 'D') {
      this.#upperBridge += '   |';
      this.#lowerBridge += ' O |';
    }
  }

  death(userMove) {
    if (userMove === 'U') {
      this.#upperBridge += ' X |';
      this.#lowerBridge += '   |';
    }
    if (userMove === 'D') {
      this.#upperBridge += '   |';
      this.#lowerBridge += ' X |';
    }
  }

  get bridge() {
    return this.#bridge;
  }

  get upsideBridge() {
    return this.#upperBridge;
  }

  get downSideBridge() {
    return this.#lowerBridge;
  }
}

module.exports = Model;
