const Bridges = require("./Bridges");
const Constant = require("../utils/Constant");
const { LEFT_BRACKET } = require("../utils/Constant");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #size;
  #currentSize;
  #failed;

  constructor(size) {
    this.#size = size;
    this.#currentSize = 0;

    this.#failed = false;

    this.bridges = new Bridges();
    this.answerBridge = [];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} input 사용자가 입력하는 "U" 혹은 "D"
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    if (this.#currentSize === 0) this.createBridges(input);
    else this.extendBridge(input);

    this.#currentSize++;
  }

  isFinished() {
    if (this.#size === this.#currentSize) return true;
    return false;
  }

  isFailed() {
    if (this.#failed) return true;
    return false;
  }

  checkFail() {
    this.#failed = true;
  }

  /**
   * 최초 다리 생성
   * @param {string} input 사용자가 입력한 "U" 혹은 "D"
   */
  createBridges(input) {
    this.bridges.saveBridges(this.createUpDownBridges(input));
  }

  createUpDownBridges(input) {
    let upBridge = LEFT_BRACKET;
    let downBridge = LEFT_BRACKET;

    if (this.isCorrectOrWrong(input)) [upBridge, downBridge] = this.buildCorrectBridge(input, upBridge, downBridge);
    else [upBridge, downBridge] = this.buildWrongBridge(input, upBridge, downBridge);

    return [upBridge, downBridge];
  }

  isCorrectOrWrong(input) {
    if (input === this.answerBridge[this.#currentSize]) return true;
    this.checkFail();

    return false;
  }

  isUpOrDown(input) {
    if (input === Constant.UP) return true;
    return false;
  }

  buildCorrectBridge(input, upBridge, downBridge) {
    if (this.isUpOrDown(input)) {
      upBridge += Constant.CORRECT;
      downBridge += Constant.NOT_CHOSEN;

      return [upBridge, downBridge];
    }

    downBridge += Constant.CORRECT;
    upBridge += Constant.NOT_CHOSEN;

    return [upBridge, downBridge];
  }

  buildWrongBridge(input, upBridge, downBridge) {
    if (this.isUpOrDown(input)) {
      upBridge += Constant.WRONG;
      downBridge += Constant.NOT_CHOSEN;

      return [upBridge, downBridge];
    }

    downBridge += Constant.WRONG;
    upBridge += Constant.NOT_CHOSEN;

    return [upBridge, downBridge];
  }

  /**
   * 최초 생성 이후 게임 진행 시 다리 연장
   * @param {string} input 사용자가 입력한 "U" 혹은 "D"
   */
  extendBridge(input) {
    this.bridges.saveBridges(this.extendUpDownBridges(input));
  }

  extendUpDownBridges(input) {
    let upBridge = this.removeRightBrackets(this.bridges.getUpBridge());
    let downBridge = this.removeRightBrackets(this.bridges.getDownBridge());

    if (this.isCorrectOrWrong(input)) [upBridge, downBridge] = this.buildCorrectBridge(input, upBridge, downBridge);
    else [upBridge, downBridge] = this.buildWrongBridge(input, upBridge, downBridge);

    return [upBridge, downBridge];
  }

  removeRightBrackets(bridge) {
    let newBridge = bridge.slice(0, -1);
    return newBridge + Constant.BAR;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * @param {string} input 사용자가 입력한 "U" 혹은 "D"
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input) {
    this.initializeCurrentSize();
    this.bridges.initializeBridges();
    this.initializeFail();

    this.move(input);
  }

  initializeCurrentSize() {
    this.#currentSize = 0;
  }

  initializeFail() {
    this.#failed = false;
  }
}

module.exports = BridgeGame;
