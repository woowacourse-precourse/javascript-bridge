// InputView, OutputView 사용 금지

const BridgeMaker = require("./utils/BridgeMaker");
const BridgeRandomNumberGenerator = require("./utils/BridgeRandomNumberGenerator");
const { UP_AND_DOWN, TRACE_MARKS, RETRY_COMMAND } = require("./constants");
const TraceController = require("./utils/TraceController");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #selectedPathLog;
  #currentTrace;

  constructor() {
    this.#selectedPathLog = [];
    this.#currentTrace = [[], []];
  }

  saveBridge(bridgeSize) {
    const generator = BridgeRandomNumberGenerator.generate;
    const bridge = BridgeMaker.makeBridge(bridgeSize, generator);
    this.#bridge = bridge;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
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

  checkFailure() {
    const isFailed = TraceController.determineFail(this.#currentTrace);
    return isFailed;
  }

  checkOvered() {
    return this.#bridge.length === this.#currentTrace[0].length;
  }

  checkRetry(command) {
    return command === RETRY_COMMAND.RETRY ? true : false;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  end() {}
}

module.exports = BridgeGame;
