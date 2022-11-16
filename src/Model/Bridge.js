const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

class Bridge {
  #bridge;
  constructor() {
    this.#bridge = '';
  }

  makeBridge(number) {
    for (let length = 1; length <= number; length += 1) {
      this.#bridge += BridgeRandomNumberGenerator.generate();
    }
  }
}
