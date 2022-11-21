const BridgeMaker = require('./BridgeMaker.js');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Map = require('./Map');

class Bridge {
  #bridge;
  #step;
  #size;
  constructor() {
    this.map = new Map();
    this.#step = 0;
    this.#size;
  }

  make(size) {
    this.validate(size);
    this.#size = size;
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.map.make(this.#bridge);
  }

  validate(size) {}

  askUserCanGo(userPosition) {
    if (this.#bridge[this.#step] === userPosition) return true;
    return false;
  }

  drawMap(go) {
    this.map.draw(go, this.#step);
    this.#step += 1;
  }
}

module.exports = Bridge;
