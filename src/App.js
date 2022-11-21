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
const { RETRY_OR_QUIT, JUDGEMENT } = require("./util/Constant");

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
   * 다리 한 칸 이동 마다 결과를 판정 (끝까지 도착 / 한 칸 이동 성공 / 한 칸 이동 실패)
   * @param {string[]} movedSpace 현재까지 이동한 칸
   * @param {boolean} isSuccessCurrentSpace 현재 칸이 성공인지 실패인지 여부
   */
  judge(isSuccessCurrentSpace) {
    if (this.#bridgeGame.isArrive()) return JUDGEMENT.IS_ARRIVE;
    if (isSuccessCurrentSpace) return JUDGEMENT.IS_SUCCESS_CURRENT_SPACE;
    return JUDGEMENT.IS_FAIL_CURRENT_SPACE;
  }

  executeByJudgement(judgement) {
    if (judgement === JUDGEMENT.IS_ARRIVE) {
      const movedSpace = this.#bridgeGame.getMovedSpace();
      printResult(movedSpace, true, this.#bridgeGame.getTryCount());
    } else if (judgement === JUDGEMENT.IS_SUCCESS_CURRENT_SPACE) {
      readMoving(this.onReadMoving.bind(this));
    } else if (judgement === JUDGEMENT.IS_FAIL_CURRENT_SPACE) {
      readGameCommand(this.onReadGameCommand.bind(this));
    }
  }

  /**
   * 사용자에게 다리 길이를 입력받은 뒤 실행할 callback function
   * @param {string} size readBridgeSize에서 입력받은 다리의 길이(3 ~ 20)
   */
  onReadBridgeSize(size) {
    validateReadBridgeSize(size);

    const bridge = makeBridge(parseInt(size, 10), generate);
    this.#bridgeGame = new BridgeGame(bridge);

    this.gameStart();
  }

  /**
   * 사용자에게 이동할 칸을 입력받은 뒤 실행할 callback function
   * @param {string} movingSpace 이동할 칸("U" or "D")
   */
  /* eslint-disable */
  onReadMoving(movingSpace) {
    validateReadMoving(movingSpace);

    const isSuccess = this.#bridgeGame.move(movingSpace);

    printMap(this.#bridgeGame.getMovedSpace(), isSuccess);

    this.executeByJudgement(this.judge(isSuccess));
  }

  /**
   * 사용자에게 재시도 여부를 입력받은 뒤 실행할 callback function
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
}

module.exports = App;
