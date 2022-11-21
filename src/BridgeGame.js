const { STATE } = require("./constants/message");
const { REPRESENTATION } = require("./constants/values");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #currentMap = { upperPart: [], lowerPart: [] };
  #myPosition = 0;
  #numberOfAttempt = 1;
  get myCurrentPosition() {
    return this.#myPosition;
  }

  get numberOfAttempt() {
    return this.#numberOfAttempt;
  }

  get currentMap() {
    return this.#currentMap;
  }

  isValidPath(toBeMoveDirection, validPath) {
    return toBeMoveDirection === validPath[this.#myPosition];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction, validPath) {
    if (this.isValidPath(direction, validPath)) {
      this.updateMyPositionForward(direction, STATE.VALID.symbol);
      return true;
    }
    this.updateMyPositionForward(direction, STATE.NOT_VALID.symbol);
    return false;
  }

  updateMyPositionForward(direction, symbol) {
    this.fillPathAccordingInput(direction, symbol);
    this.#myPosition += 1;
    return this;
  }

  fillPathAccordingInput(input, symbol) {
    if (input === REPRESENTATION.UPPER.abbreviatedForm) {
      this.#currentMap.upperPart.push(symbol);
      this.fillBlankUnselectedPath(REPRESENTATION.LOWER.numericalForm);
    }
    if (input === REPRESENTATION.LOWER.abbreviatedForm) {
      this.#currentMap.lowerPart.push(symbol);
      this.fillBlankUnselectedPath(REPRESENTATION.UPPER.numericalForm);
    }
  }
  fillBlankUnselectedPath(direction) {
    direction === REPRESENTATION.UPPER.numericalForm
      ? this.#currentMap.upperPart.push("   ")
      : this.#currentMap.lowerPart.push("   ");
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.initState();
    this.#numberOfAttempt += 1;
  }

  initState() {
    this.#currentMap = { upperPart: [], lowerPart: [] };
    this.#myPosition = 0;
  }
}

module.exports = BridgeGame;
