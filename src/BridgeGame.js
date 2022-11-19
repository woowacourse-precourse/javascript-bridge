const { VALUE, STATUS } = require('./constants/values');
const { KEYS } = require('./constants/keys');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #playerAt = 0;
  #trialCount = 1;
  #moveResult;
  #bridgeUpper = [];
  #bridgeLower = [];
  #gameWin;
  #gameStatus;

  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
  }

  getTrialCount() {
    return this.#trialCount;
  }

  getGameWin() {
    return this.#gameWin;
  }

  getBridgeUpper() {
    return this.#bridgeUpper;
  }

  getBridgeLower() {
    return this.#bridgeLower;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   move(input) {
    this.checkMovement(input, this.#bridge, this.#playerAt);
    this.setBridgeForm(input);
    this.checkSuccessFail();
    return [this.#bridgeUpper, this.#bridgeLower, this.#gameStatus];
  }

  checkMovement(input, bridge, idx) {
    if (input === bridge[idx]) {
      this.#moveResult = VALUE.SUCCESS;
      this.#playerAt = this.#playerAt + 1;
      return;
    }
    this.#moveResult = VALUE.FAILURE;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
  }
}

module.exports = BridgeGame;
