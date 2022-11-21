const { validate, isMovingInput } = require('../Validator');
const MapGenerator = require('./MapGenerator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #stateManager;

  constructor(bridge, stateManager) {
    this.#bridge = bridge;
    this.#stateManager = stateManager;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    validate(moving, isMovingInput);

    const stage = this.#stateManager.getStage();
    MapGenerator.generate(this.#bridge, stage, moving);

    this.checkWrongMoving(stage, moving);

    this.#stateManager.increaseStage();
  }

  checkWrongMoving(stage, moving) {
    const isWrongMoving = this.#bridge[stage] !== moving;

    if (isWrongMoving) {
      this.#stateManager.updateGameStatus('FAIL');
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#stateManager.reset();
    MapGenerator.reset();
  }
}

module.exports = BridgeGame;
