const Bridge = require('../model/Bridge');
const { readBridgeSize, readMoving } = require('../view/InputView');
const { printGameStart } = require('../view/OutputView');

class GameManager {
  #bridgeSize;

  async execute() {
    printGameStart();
    this.#bridgeSize = await readBridgeSize();
    const bridge = new Bridge(this.#bridgeSize);
    bridge.print();
    console.log(await readMoving());
  }
}
module.exports = GameManager;
