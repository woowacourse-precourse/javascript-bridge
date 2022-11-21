const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #board;
  #count;

  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#board = [[], []];
    this.#count = 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    const location = this.#board[0].length;
    const marking = this.markBoard(direction, location);
    return [marking, this.isEnd()];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.init();
    this.#count++;
  }

  init() {
    this.#board = [[], []];
  }

  markBoard(direction, location) {
    const directionNumber = this.parseDirection(direction);
    const marking = this.#bridge[location] === direction;
    this.#board[directionNumber].push(marking ? "O" : "X");
    this.#board[Number(!directionNumber)].push(" ");
    return marking;
  }

  parseDirection(direction) {
    if (direction === "D") return 0;
    return 1;
  }

  isEnd() {
    return this.#board[0].length === this.#bridge.length;
  }

  get bridge() {
    return [...this.#bridge];
  }
  get board() {
    return [...this.#board];
  }
  get count() {
    return this.#count;
  }
}

module.exports = BridgeGame;
