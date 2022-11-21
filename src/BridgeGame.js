/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const {
  DIRECTION,
  DIRECTION_MATCH,
  RETRY,
  SUCCESS_RESULT,
} = require("./constants/gameState");
const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeGameController = require("./BridgeGameController");

class BridgeGame {
  #bridge;
  #totalCount;
  #bridgeGameController;
  #userDirectionInput;
  #resultMap;

  constructor() {
    this.#bridgeGameController = new BridgeGameController();
    this.#totalCount = 0;
    this.#userDirectionInput = [];
    this.#resultMap = [];
  }

  startGame(bridgeSize) {
    if (this.#bridgeGameController.validateBridgeLength(bridgeSize)) {
      this.#bridge = BridgeMaker.makeBridge(bridgeSize, generate);
    }
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    if (this.#bridgeGameController.validateDirection(direction)) {
      this.#totalCount++;
      this.compareDirection(direction);
    }
  }

  compareDirection(direction) {
    if (direction === this.#bridge[this.#userDirectionInput.length]) {
      this.#userDirectionInput.push([DIRECTION_MATCH.RIGHT, direction]);
      this.makeMap(this.#userDirectionInput);
      this.checkFinish();
    } else if (direction !== this.#bridge[this.#userDirectionInput.length]) {
      this.#userDirectionInput.push([DIRECTION_MATCH.WRONG, direction]);
      this.makeMap(this.#userDirectionInput);
      this.#userDirectionInput.pop();
      this.#bridgeGameController.inputRetry();
    }
  }

  checkFinish() {
    if (this.#userDirectionInput.length === this.#bridge.length) {
      this.#bridgeGameController.outputResult(
        this.#resultMap,
        SUCCESS_RESULT.SUCCESS,
        this.#totalCount
      );
    } else if (this.#userDirectionInput.length !== this.#bridge.length) {
      this.#bridgeGameController.inputDirection();
    }
  }

  makeMap(userDirectionInput) {
    const upArray = [];
    const downArray = [];
    for (let i = 0; i < userDirectionInput.length; i++) {
      this.checkUpDown(userDirectionInput[i], upArray, downArray);
    }
    this.#resultMap = `[ ${upArray.join(" | ")} ]\n[ ${downArray.join(
      " | "
    )} ]`;
    this.#bridgeGameController.outputMap(this.#resultMap);
  }

  checkUpDown(input, upArray, downArray) {
    if (input[1] === DIRECTION.UP) {
      upArray.push(input[0]);
      downArray.push(" ");
    }
    if (input[1] === DIRECTION.DOWN) {
      downArray.push(input[0]);
      upArray.push(" ");
    }
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(isRetry) {
    this.#bridgeGameController.validateRetry(isRetry);
    if (isRetry === RETRY.RETRY) this.#bridgeGameController.inputDirection();
    if (isRetry === RETRY.QUIT) {
      this.#bridgeGameController.outputResult(
        this.#resultMap,
        SUCCESS_RESULT.FAIL,
        this.#totalCount
      );
    }
  }
}

module.exports = BridgeGame;
