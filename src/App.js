const {
  readBridgeSize,
  readMoving,
  readGameCommand,
} = require("./util/InputView");
const { printStart, printResult, printMap } = require("./util/OutputView");
const {
  validateReadBridgeSize,
  validateReadMoving,
  validateReadGameCommand,
} = require("./util/Validate");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const { RETRY_OR_QUIT } = require("./util/Constant");

class App {
  #bridgeGame;

  play() {
    printStart();
    readBridgeSize(this.onReadBridgeSize.bind(this));
  }

  gameStart() {
    readMoving(this.onReadMoving.bind(this));
  }

  /**
   * @param {string} size readBridgeSize에서 입력받은 다리의 길이
   */
  onReadBridgeSize(size) {
    validateReadBridgeSize(size);
    const bridge = makeBridge(parseInt(size, 10), generate);
    this.#bridgeGame = new BridgeGame(bridge);
    this.gameStart();
  }

  /**
   * @param {string} movingSpace 이동할 칸 ("U" or "D")
   */
  onReadMoving(movingSpace) {
    validateReadMoving(movingSpace);
    const isSuccess = this.#bridgeGame.move(movingSpace);
    const movedSpace = this.#bridgeGame.getMovedSpace();
    printMap(movedSpace, isSuccess);
    if (!isSuccess) readGameCommand(this.onReadGameCommand.bind(this));
    this.judge(movedSpace, isSuccess);
  }

  /**
   * @param {string} retryOrQuit 재시도 여부("R" or "Q")
   */
  onReadGameCommand(retryOrQuit) {
    validateReadGameCommand(retryOrQuit);
    if (retryOrQuit === RETRY_OR_QUIT.RETRY) {
      this.#bridgeGame.retry(this);
    } else if (retryOrQuit === RETRY_OR_QUIT.QUIT) {
      const movedSpace = this.#bridgeGame.getMovedSpace();
      printResult(movedSpace, false, this.#bridgeGame.getTryCount());
    }
  }

  /**
   * @param {string[]} movedSpace 현재까지 이동한 칸
   * @param {boolean} isSuccess 현재 칸이 성공인지 실패인지 여부
   */
  judge(movedSpace, isSuccess) {
    if (this.#bridgeGame.isArrive())
      printResult(movedSpace, true, this.#bridgeGame.getTryCount());
    else if (isSuccess) readMoving(this.onReadMoving.bind(this));
  }
}

module.exports = App;
