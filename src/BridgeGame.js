const BridgeGameCore = require("./core/BridgeGameCore");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const Progress = require("./Progress");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame extends BridgeGameCore {
  #bridge = null;
  #position = 0;
  totalTrial = 0;

  constructor(bridgeSize) {
    super();
    this.#init(bridgeSize);
  }

  isFinished() {
    return this.#position >= this.#bridge.length;
  }

  isMatchedCommand(command) {
    return command === this.#bridge[this.#position];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command) {
    if (this.isFinished()) {
      return false;
    }
    return this.#judgeNextMove(command);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#reInit();
  }

  #judgeNextMove(command) {
    if (this.#isMatchCommand(command)) {
      this.#moveSuccess(command);
      return true;
    }
    this.#moveFail(command);
    return false;
  }

  #isMatchCommand(command) {
    return command === this.#bridge[this.#position];
  }

  #moveSuccess(command) {
    this.#position += 1;
    this.progress.success(command);
  }

  #moveFail(command) {
    this.progress.fail(command);
  }

  #init(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate,
    );
    this.#reInit();
  }

  #reInit() {
    this.progress = new Progress();
    this.#position = 0;
    this.totalTrial += 1;
  }
}

module.exports = BridgeGame;
