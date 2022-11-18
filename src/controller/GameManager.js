const Bridge = require('../model/Bridge');
const { readBridgeSize } = require('../view/InputView');
const { printGameStart } = require('../view/OutputView');

class GameManager {
  #bridgeSize;

  async execute() {
    printGameStart();
    this.#bridgeSize = await readBridgeSize();
    const bridge = new Bridge(this.#bridgeSize);
    bridge.print();
  }
}
module.exports = GameManager;
