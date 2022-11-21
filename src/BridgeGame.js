const BridgeInformation = require("./BridgeInformation");
const { SIGN } = require("./Constants");

class BridgeGame {
  #movingRoute = [];
  #info;
  #tryCount = 1;
  #inputIndex = -1;

  constructor(size) {
    this.size = size;
    this.#info = new BridgeInformation(size);
  }

  move() {}

  retry() {}
}

module.exports = BridgeGame;
