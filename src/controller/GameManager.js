const { readBridgeSize } = require('../view/InputView');

class GameManager {
  #bridgeSize;

  async execute() {
    this.#bridgeSize = await readBridgeSize();
    console.log(this.#bridgeSize);
  }
}
module.exports = GameManager;
