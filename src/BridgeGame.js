const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = [];
  #selectedBridge = [];
  #history = [];
  #totalTry = 1;
  #gameEnd = false;

  setBridge(bridgeLength) {
    const bridge = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );
    this.#bridge = bridge;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    this.#selectedBridge.push(direction);
    const { result, winThisTurn } = this.#getResultOfTurn(direction);
    const history = [...this.#history, result];
    // console.log(this.#bridge.length, history.length);
    // if (winThisTurn) {
    this.#saveHistory(history);
    // }
    if (this.#bridge.length === history.length) {
      this.#gameEnd = true;
    }

    return { history, winThisTurn, gameEnd: this.#gameEnd };
  }

  #getResultOfTurn(direction) {
    const DIRECTIONS = ["U", "D"];
    const winThisTurn = this.#checkMatchDirection(direction);

    const result = DIRECTIONS.map((_direction) => {
      if (_direction === direction) return winThisTurn ? "O" : "X";
      return " ";
    });

    return { result, winThisTurn };
  }

  #checkMatchDirection(direction) {
    const lastIndex = this.#history.length;
    const thisSolution = this.#bridge[lastIndex];
    return thisSolution === direction;
  }

  #saveHistory(result) {
    // console.log("🚀 saveHistory >>>>", result);
    this.#history = result;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#totalTry++;
    this.#history = [];
    this.#selectedBridge = [];
  }

  get result() {
    return this.#bridge.toString() === this.#selectedBridge.toString()
      ? "성공"
      : "실패";
  }

  get totalTry() {
    return this.#totalTry;
  }

  get history() {
    return this.#history;
  }

  removeLastHistory() {
    this.#history.slice(this.#history.length - 1);
  }
}

module.exports = BridgeGame;
