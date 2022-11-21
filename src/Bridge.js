const BridgeMaker = require('./BridgeMaker.js');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Map = require('./Map');

class Bridge {
  #bridge;
  constructor() {
    this.map = new Map();
  }

  make(size) {
    this.validate(size);
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.map.make(this.#bridge);
  }

  validate(size) {}

  askUserCanGo(userPosition, step) {
    if (this.#bridge[step] === userPosition) return true;
    return false;
  }

  drawMap(go, step) {
    this.map.draw(go, step);
  }
}

module.exports = Bridge;
