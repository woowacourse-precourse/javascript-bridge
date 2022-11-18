const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');
const { makeBridge } = require('../utils/BridgeMaker');
const { MODEL_KEY } = require('../utils/constants');

class BridgeRepository {
  #model;

  constructor() {
    this.#model = new Map();
  }

  create(inputLength) {
    this.update(
      MODEL_KEY.randomBridge,
      makeBridge(Number(inputLength), BridgeRandomNumberGenerator.generate)
    );

    this.update(MODEL_KEY.userBridge, []);
    this.update(MODEL_KEY.tryCount, 1);
  }

  read(key) {
    return this.#model.get(key);
  }

  update(key, value) {
    this.#model.set(key, value);
  }
}

module.exports = BridgeRepository;
