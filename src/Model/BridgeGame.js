const BridgeStore = require('./BridgeStore');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeValidator = require('../Validator/BridgeValidator');

const INITIAL_GAME_COUNT = 1;
const INITIAL_BRIDGE_SIZE = {
  min: 3,
  max: 20,
};
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridgeStore;

  #moveCount;

  constructor(bridgeSize = INITIAL_BRIDGE_SIZE) {
    this.bridgeValidator = new BridgeValidator({ bridgeSize });
    this.#moveCount = 0;
  }

  #increaseMoveCount = () => {
    this.#moveCount += 1;
  };

  #resetMoveCount = () => {
    this.#moveCount = 0;
  };

  #detectIsMovable = (command) => {
    if (!this.bridgeStore.isMovable(this.#moveCount, command)) {
      this.#resetMoveCount();
      return false;
    }

    this.#increaseMoveCount();
    return true;
  };

  #detectIsGameClear = () => {
    if (!this.bridgeStore.isGameClear()) {
      return false;
    }

    return true;
  };

  isMoved(command) {
    if (!this.#detectIsMovable(command) || this.#detectIsGameClear()) {
      return false;
    }

    return true;
  }

  isBiggerThanMoveCount = (number) => number > this.#moveCount;

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move = (command) => {
    this.bridgeValidator.isValidCommand('move', command);
    this.#setMovedData(command);

    if (!this.isMoved(command)) {
      return false;
    }

    return true;
  };

  #setMovedData = (command) => {
    this.bridgeStore.addUserInputResult(
      { command, result: this.bridgeStore.isMovable(this.#moveCount, command) },
    );
  };

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry = () => {
    this.bridgeStore.retry();
  };

  createBridge(bridgeSize) {
    this.bridgeValidator.isValidBridgeSize(bridgeSize);
    const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    this.bridgeStore = new BridgeStore(bridge, INITIAL_GAME_COUNT);
  }
}

module.exports = BridgeGame;
