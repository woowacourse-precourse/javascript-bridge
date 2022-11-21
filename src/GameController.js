const BridgeGame = require("./BridgeGame");
const BridgeSizeValidation = require("./validation/BridgeSizeValidation");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const MovingValidation = require("./validation/MovingValidation");
const { MESSAGES } = require("./constants");
const TraceController = require("./utils/TraceController");
const RetryValidation = require("./validation/RetryValidation");

/**
 * 다리건너기 게임 진행을 관리한다.
 */
class GameController {
  #bridgeGame;
  #selectedPath;

  constructor() {
    this.#bridgeGame = new BridgeGame();
    this.start();
  }

  /**
   * 게임 시작 문구를 출력한다.
   */
  start() {
    OutputView.printMessage(MESSAGES.START);
    this.askForBridgeSize();
  }

  /**
   * 사용자에게 생성될 다리의 길이를 입력받아 값에 따라 처리한다.
   */
  askForBridgeSize() {
    InputView.readBridgeSize((input) => {
      try {
        new BridgeSizeValidation(input);
        this.callSaveBridge(input);
      } catch (e) {
        OutputView.printMessage(e);
        this.askForBridgeSize();
      }
    });
  }

  /**
   * 다리의 길이를 저장할 것을 요청한다.
   * @param {string} input - 사용자가 입력한 다리의 길이
   */
  callSaveBridge(input) {
    const bridgeSize = Number(input);
    this.#bridgeGame.saveBridge(bridgeSize);
    OutputView.printMessage("");
    this.askForPath();
  }

  /**
   * 사용자에게 이동할 방향을 입력받아 값에 따라 처리한다.
   */
  askForPath() {
    InputView.readMoving((input) => {
      try {
        new MovingValidation(input);
        this.#selectedPath = input;
        this.convertTrace();
      } catch (e) {
        OutputView.printMessage(e);
        this.askForPath();
      }
    });
  }

  /**
   * 사용자가 이동해온 길의 배열을 문자열로 변환 요청한다.
   */
  convertTrace() {
    const trace = this.#bridgeGame.move(this.#selectedPath);
    TraceController.convertTrace(trace);
    this.stirUp();
  }

  /**
   * 사용자의 실패 여부, 게임 종료 여부에 따라 후속절차를 결정한다.
   */
  stirUp() {
    const isFailed = this.#bridgeGame.checkFailure();
    const isOvered = this.#bridgeGame.checkOvered();
    if (isFailed) this.askRetry();
    else if (!isOvered && !isFailed) this.askForPath();
    if (isOvered && !isFailed) this.printEnding();
  }

  /**
   * 사용자에게 재도전 여부를 입력받아 값에 따라 처리한다.
   */
  askRetry() {
    InputView.readGameCommand((input) => {
      try {
        new RetryValidation(input);
        this.stirUpRetry(input);
      } catch (e) {
        OutputView.printMessage(e);
        this.askRetry();
      }
    });
  }

  /**
   * 사용자가 입력한 재도전 여부에 따라 후속 절차를 결정한다.
   * @param {string} command
   */
  stirUpRetry(command) {
    if (this.#bridgeGame.checkRetry(command)) {
      this.#selectedPath;
      this.#bridgeGame.retry();
      this.askForPath();
    } else if (!this.#bridgeGame.checkRetry(command)) this.printEnding();
  }

  /**
   * 게임 종료시 메시지를 출력을 요청한다.
   */
  printEnding() {
    OutputView.printMessage(MESSAGES.RESULT);
    const result = this.#bridgeGame.getResult();
    const [isFailed, tryCount, trace] = result;
    TraceController.convertTrace(trace);
    OutputView.printResult(isFailed, tryCount);
  }
}

module.exports = GameController;
