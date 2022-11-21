const BridgeMaker = require("./utils/BridgeMaker");
const BridgeRandomNumberGenerator = require("./utils/BridgeRandomNumberGenerator");
const { RETRY_COMMAND } = require("./constants");
const TraceController = require("./utils/TraceController");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #selectedPathLog;
  #currentTrace;
  #tryCount;

  constructor() {
    this.#selectedPathLog = [];
    this.#currentTrace = [[], []];
    this.#tryCount = 1;
  }

  /**
   * 사용자가 입력한 다리의 길이만큼 다리를 생성하여 클래스 필드로 저장한다.
   * @param {number} bridgeSize - 사용자가 입력한 다리의 길이
   */
  saveBridge(bridgeSize) {
    const generator = BridgeRandomNumberGenerator.generate;
    const bridge = BridgeMaker.makeBridge(bridgeSize, generator);
    this.#bridge = bridge;
  }

  /**
   * 사용자가 선택한 방향에 따라 trace를 업데이트하여 반환한다.
   * @param {string} selectedPath - 사용자가 선택한 방향
   * @returns {string[][]}
   */
  move(selectedPath) {
    this.#selectedPathLog.push(selectedPath);
    const trace = TraceController.makeTrace(
      selectedPath,
      this.#selectedPathLog,
      this.#bridge,
      this.#currentTrace
    );
    this.#currentTrace = trace;
    return trace;
  }

  /**
   * 사용자가 이동해온 길에 실패여부를 조회하여 반환한다.
   * @returns {boolean}
   */
  checkFailure() {
    const isFailed = TraceController.determineFail(this.#currentTrace);
    return isFailed;
  }

  /**
   * 게임의 종료 여부를 반환한다
   * @returns {boolean}
   */
  checkOvered() {
    return this.#bridge.length === this.#currentTrace[0].length;
  }

  /**
   * 사용자의 응답 값에 따라 재도전 여부를 반환한다.
   * @param {string} command - 재도전 여부에 대한 사용자의 응답 값
   * @returns {boolean}
   */
  checkRetry(command) {
    const retrySelected = command === RETRY_COMMAND.RETRY;
    retrySelected && this.#selectedPathLog.pop();
    return retrySelected;
  }

  /**
   * 도전횟수를 증가시키고 trace 값을 변경 요청한다.
   */
  retry() {
    this.#tryCount++;
    this.#currentTrace = TraceController.resetTrace(this.#currentTrace);
  }

  /**
   * 게임의 결과를 배열화하여 반환한다.
   * @returns {{isFailed: boolean, tryCount: number, trace: string[][]}[]}
   */
  getResult() {
    const isFailed = this.checkFailure();
    const tryCount = this.#tryCount;
    const trace = this.#currentTrace;
    return [isFailed, tryCount, trace];
  }
}

module.exports = BridgeGame;
