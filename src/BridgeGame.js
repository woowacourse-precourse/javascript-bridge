/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const BridgeValidator = require("./utils/BridgeValidator");
const { BRIDGE_LENGTH } = require("./constants/gameState");
const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const DirectionValidator = require("./utils/DirectionValidator");
const BridgeGameController = require("./BridgeGameController");

class BridgeGame {
  #bridge;
  #totalCount;
  #bridgeGameController;

  constructor() {
    this.#bridgeGameController = new BridgeGameController();
    this.#totalCount = 0;
  }

  startGame(bridgeSize) {
    this.validateBridgeLength(bridgeSize);
    this.#bridge = BridgeMaker.makeBridge(bridgeSize, generate);
    // Console.print(this.#bridge); //지우기
  }

  validateBridgeLength(size) {
    try {
      BridgeValidator.isInRange(size, BRIDGE_LENGTH.START, BRIDGE_LENGTH.END);
      BridgeValidator.isNumber(size);
    } catch (e) {
      this.#bridgeGameController.outputError(e);
      this.#bridgeGameController.inputBridgeSize();
    }
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    this.validateDirection(direction);
  }

  validateDirection(direction) {
    try {
      DirectionValidator.validateDirection(direction);
    } catch (e) {
      this.#bridgeGameController.outputError(e);
      this.#bridgeGameController.inputDirection();
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
