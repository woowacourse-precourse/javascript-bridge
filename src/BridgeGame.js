const { gameStart, bridgeSize, moving } = require("./UI/View");
const { APPROPRIATE_INPUT, ANSWER } = require("./Utils/Constants");
const { UP } = APPROPRIATE_INPUT;
const { RIGHT, WRONG, UNCHOSEN } = ANSWER;

const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #round = 0;
  #userState = { top: [], bottom: [] };

  start() {
    gameStart();
    bridgeSize(this.generateBridge.bind(this));
  }

  generateBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(
      Number(size),
      BridgeRandomNumberGenerator.generate
    );

    moving(this.move.bind(this));
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command) {
    if (command === this.#bridge[this.#round]) {
      this.#round += 1;
      return this.traversable(command);
    }
    if (command !== this.#bridge[this.#round]) {
      this.#round += 1;
      return this.untraversable(command);
    }
  }

  traversable(command) {
    command === UP ? this.mark(RIGHT, UNCHOSEN) : this.mark(UNCHOSEN, RIGHT);

    moving(this.move.bind(this));
  }

  untraversable(command) {
    command === UP ? this.mark(WRONG, UNCHOSEN) : this.mark(UNCHOSEN, WRONG);
  }

  mark(top, bottom) {
    this.#userState.top.push(top);
    this.#userState.bottom.push(bottom);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
