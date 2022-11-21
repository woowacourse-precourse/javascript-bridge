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
}

module.exports = BridgeGame;
