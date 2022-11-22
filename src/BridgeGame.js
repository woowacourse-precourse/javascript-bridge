const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const Progress = require("./Progress");
const {
  RETRY_COMMAND: { RETRY },
} = require("./core/BridgeGameCore");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #position = 0;
  totalTrial = 0;

  constructor(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate,
    );
    this.#reInit();
  }

  isFinished() {
    return this.#position >= this.#bridge.length;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command, successCallback, failCallback) {
    if (!this.isFinished()) {
      this.#judgeMove(command, successCallback, failCallback);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(command, retryCallback, quitCallback) {
    command === RETRY ? retryCallback() : quitCallback();
  }

  #judgeMove(command, successCallback, failCallback) {
    this.#isMatchCommand(command)
      ? this.#moveSuccess(command, successCallback)
      : this.#moveFail(command, failCallback);
  }

  #isMatchCommand(command) {
    return command === this.#bridge[this.#position];
  }

  #moveSuccess(command, cb) {
    this.#position += 1;
    this.progress.success(command);
    cb();
  }

  #moveFail(command, cb) {
    this.progress.fail(command);
    cb();
  }

  #reInit() {
    this.progress = new Progress();
    this.#position = 0;
    this.totalTrial += 1;
  }
}

module.exports = BridgeGame;
