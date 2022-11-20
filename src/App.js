const { readBridgeSize, readMoving } = require("./util/InputView");
const { printStart, printResult, printMap } = require("./util/OutputView");
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
    // printResult();
  }

  /**
   * @param {string} size readBridgeSize에서 입력받은 다리의 길이
   */
  onReadBridgeSize(size) {
    validateReadBridgeSize(size);
    const bridge = makeBridge(parseInt(size, 10), generate);
    this.gameStart(bridge);
  }

  /**
   *
   * @param {string[]} bridge 건너야 할 다리
   */
  gameStart(bridge) {
    console.log(bridge);
    this.#bridgeGame = new BridgeGame(bridge);
    readMoving(this.onReadMoving.bind(this));
  }

  /**
   * @param {string} movingSpace 이동할 칸 ("U" or "D")
   */
  onReadMoving(movingSpace) {
    validateReadMoving(movingSpace);
    const isSuccess = this.#bridgeGame.move(movingSpace);
    printMap(this.#bridgeGame.getMovedSpace(), isSuccess);
    if (this.#bridgeGame.isArrive()) console.log("도착! 게임 종료");
    else if (isSuccess) readMoving(this.onReadMoving.bind(this));
  }
}

module.exports = App;
