const { readBridgeSize } = require('../view/InputView');
const { printGameStart } = require('../view/OutputView');

class GameManager {
  #bridgeSize;

  async execute() {
    printGameStart();
    this.#bridgeSize = await readBridgeSize();
  }
}
module.exports = GameManager;
