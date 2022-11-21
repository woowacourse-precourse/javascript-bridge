const MapGenerator = require('./MapGenerator');
const StateManager = require('./StateManager');
const BridgeMaker = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #stateManager;

  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(size, generate);
    this.#stateManager = new StateManager(0, 'PLAYING', 1);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    const stage = this.#stateManager.getStage();
    MapGenerator.generate(this.#bridge, stage, moving);

    this.checkFailOrClear(stage, moving);

    this.#stateManager.increaseStage();
  }

  checkFailOrClear(stage, moving) {
    const isWrongMoving = this.#bridge[stage] !== moving;

    if (isWrongMoving) {
      this.#stateManager.updateGameStatus('FAIL');
      return;
    }

    this.checkGameClear(stage);
  }

  checkGameClear(stage) {
    const isFinalStage = this.#bridge.length - 1 === stage;

    if (isFinalStage) {
      this.#stateManager.updateGameStatus('CLEAR');
    }
  }

  getStateManager() {
    return this.#stateManager;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#stateManager.retry();
    MapGenerator.reset();
  }
}

module.exports = BridgeGame;
