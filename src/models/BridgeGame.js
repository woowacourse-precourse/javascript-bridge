/*
 *제공된 BridgeGame 클래스를 활용해 구현해야 한다.
 *BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.
 *BridgeGame의 파일 경로는 변경할 수 있다.
 *BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
 *게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.
 */

const { makeBridge } = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../utils/BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #movingHistory = [];

  #numberOfTry = 1;

  setup(size) {
    this.#bridge = makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    this.#movingHistory.push(direction);
  }

  getResult() {
    return {
      win: this.#getWin(),
      up: this.#getResultOfUp(),
      down: this.#getResultOfDown(),
      isLast: this.#getIsLast(),
      tryCount: this.#numberOfTry,
    };
  }

  #getIsLast() {
    return this.#bridge.length === this.#movingHistory.length;
  }

  #getResultOfUp() {
    return this.#movingHistory.map((direction, index) => {
      if (direction === "U" && this.#bridge[index] === "U") return "O";
      if (direction === "U" && this.#bridge[index] === "D") return "X";
      return " ";
    });
  }

  #getResultOfDown() {
    return this.#movingHistory.map((direction, index) => {
      if (direction === "D" && this.#bridge[index] === "D") return "O";
      if (direction === "D" && this.#bridge[index] === "U") return "X";
      return " ";
    });
  }

  #getWin() {
    const lastIndexOfMoved = this.#movingHistory.length - 1;
    return (
      this.#movingHistory[lastIndexOfMoved] === this.#bridge[lastIndexOfMoved]
    );
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  resetHistory() {
    this.#plusNumberOfTry();
    this.#resetMoved();
  }

  #plusNumberOfTry() {
    this.#numberOfTry += 1;
  }

  #resetMoved() {
    this.#movingHistory = [];
  }
}

module.exports = BridgeGame;
