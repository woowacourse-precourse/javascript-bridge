const { readBridgeSize, readMoving } = require("./InputView");
const { printStart, printResult } = require("./OutputView");
const {
  validateReadBridgeSize,
  validateReadMoving,
} = require("./util/Validate");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");

class App {
  #bridgeGame;

  play() {
    printStart();
    readBridgeSize(this.onReadBridgeSize.bind(this));
    printResult();
  }

  /**
   * @param {string} size readBridgeSize에서 입력받은 다리의 길이
   */
  onReadBridgeSize(size) {
    validateReadBridgeSize(size);
    const bridge = makeBridge(parseInt(size, 10), generate);
    this.gameStart(bridge);
  }

  gameStart(bridge) {
    this.#bridgeGame = new BridgeGame(bridge);
    readMoving(this.onReadMoving.bind(this));
  }

  /**
   * @param {string} movingSpace 이동할 칸 ("U" or "D")
   */
  onReadMoving(movingSpace) {
    validateReadMoving(movingSpace);
    this.#bridgeGame.move(movingSpace);
    readMoving(this.onReadMoving.bind(this));
  }
}

module.exports = App;
