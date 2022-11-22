const { BRIDGE_MAKER } = require("./constants/messages");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = [];
  #nowIndex = 0;
  #upString = BRIDGE_MAKER.START;
  #downString = BRIDGE_MAKER.START;
  #tryCount = 1;

  setBridge(birdge) {
    this.#bridge = birdge;
  }

  comparBridge(input) {
    const result = this.#bridge[this.#nowIndex] === input;
    this.move();
    return result;
  }

  getBridgeString() {
    return [this.#upString, this.#downString];
  }  

  getTryCount() {
    return this.#tryCount;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.#nowIndex += 1;
  }

  addCorrect() {
    if (this.#bridge[this.#nowIndex] === "U") {
      this.#upString += BRIDGE_MAKER.CORRECT;
      this.#downString += BRIDGE_MAKER.NOTHING;
    } else {
      this.#upString += BRIDGE_MAKER.NOTHING;
      this.#downString += BRIDGE_MAKER.CORRECT;
    }
  }
  addSeperate() {
    if (this.checkLast()) {
      this.#upString += BRIDGE_MAKER.END;
      this.#downString += BRIDGE_MAKER.END;
    } else {
      this.#upString += BRIDGE_MAKER.BAR;
      this.#downString += BRIDGE_MAKER.BAR;
    }
  }

  addWrong() {
    if (this.#bridge[this.#nowIndex] === "U") {
      this.#upString += BRIDGE_MAKER.NOTHING + BRIDGE_MAKER.END;
      this.#downString += BRIDGE_MAKER.WRONG + BRIDGE_MAKER.END;
    } else {
      this.#upString += BRIDGE_MAKER.WRONG + BRIDGE_MAKER.END;
      this.#downString += BRIDGE_MAKER.NOTHING + BRIDGE_MAKER.END;
    }
  }
  checkLast() {
    return this.#nowIndex === this.#bridge.length;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#tryCount += 1;
    this.#nowIndex = 0;
    this.#upString = BRIDGE_MAKER.START;
    this.#downString = BRIDGE_MAKER.START;
  }
}

module.exports = BridgeGame;
