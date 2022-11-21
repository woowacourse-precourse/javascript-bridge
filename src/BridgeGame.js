const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const MovementStatus = require("./model/MovementStatus");
const ValidationCheck = require("./VaildationCheck");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #movementStatus;
  #gameState;

  constructor(size) {
    ValidationCheck.isNumberIntheRange([3, 20], size);
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#movementStatus = new MovementStatus();
    this.#gameState = true;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveInput) {
    //이동 체크
    const currentRound = this.currentStatus.round;
    const { upperResult, lowerResult, gameState } = this.roundCheck(
      moveInput,
      currentRound
    );
    //이동 상태 변경
    this.#movementStatusUpdate({ upperResult, lowerResult });
    this.#gameState = gameState;
    //현재 상태 리턴,
    return { status: this.currentStatus, gameState };
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  get currentStatus() {
    return { ...this.#movementStatus };
  }
  get gameState() {
    return this.#gameState;
  }
}

module.exports = BridgeGame;
