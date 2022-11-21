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
  #game;

  play() {
    printStart();
    readBridgeSize(this.onReadBridgeSize.bind(this));
  }

  gameStart() {
    readMoving(this.onReadMoving.bind(this));
  }

  /**
   * 다리 한 칸 이동 마다 결과를 판정 (끝까지 도착 / 한 칸 이동 성공 / 한 칸 이동 실패)
   * @return {boolean} 판정 결과 (judgement)
   */
  judge() {
    if (this.#game.isArrive()) return JUDGEMENT.IS_ARRIVE;
    if (this.#game.isSuccessMoved()) return JUDGEMENT.IS_SUCCESS_MOVED;
    return JUDGEMENT.IS_FAIL_MOVED;
  }

  /**
   * 판정 결과에 따라 함수 실행
   * @param {number} judgement 판정 결과
   */
  executeByJudgement(judgement) {
    if (judgement === JUDGEMENT.IS_ARRIVE)
      printResult(this.#game.getMovedSpace(), true, this.#game.getTryCount());
    else if (judgement === JUDGEMENT.IS_SUCCESS_MOVED)
      readMoving(this.onReadMoving.bind(this));
    else if (judgement === JUDGEMENT.IS_FAIL_MOVED)
      readGameCommand(this.onReadGameCommand.bind(this));
  }

  /**
   * 사용자에게 다리 길이를 입력받은 뒤 실행할 callback function
   * @param {string} size readBridgeSize에서 입력받은 다리의 길이(3 ~ 20)
   */
  onReadBridgeSize(size) {
    validateReadBridgeSize(size);

    const bridge = makeBridge(parseInt(size, 10), generate);
    this.#game = new BridgeGame(bridge);

    this.gameStart();
  }

  /**
   * 사용자에게 이동할 칸을 입력받은 뒤 실행할 callback function
   * @param {string} movingSpace 이동할 칸("U" or "D")
   */
  onReadMoving(movingSpace) {
    validateReadMoving(movingSpace);

    this.#game.move(movingSpace);
    printMap(this.#game.getMovedSpace(), this.#game.isSuccessMoved());

    this.executeByJudgement(this.judge());
  }

  /**
   * 사용자에게 재시도 여부를 입력받은 뒤 실행할 callback function
   * @param {string} retryOrQuit 재시도 여부("R" or "Q")
   */
  onReadGameCommand(retryOrQuit) {
    validateReadGameCommand(retryOrQuit);

    if (retryOrQuit === RETRY_OR_QUIT.RETRY) {
      this.#game.retry(this);
    } else if (retryOrQuit === RETRY_OR_QUIT.QUIT) {
      printResult(this.#game.getMovedSpace(), false, this.#game.getTryCount());
    }
  }
}

module.exports = App;
