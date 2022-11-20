const {
  gameStart,
  bridgeSize,
  moving,
  gameCommand,
  gameMap,
  gameResult,
} = require("./UI/View");
const {
  APPROPRIATE_INPUT,
  ANSWER,
  REPLACEMENT,
  GAME_MESSAGE,
} = require("./Utils/Constants");
const { UP, RESTART, QUIT } = APPROPRIATE_INPUT;
const { RIGHT, WRONG, UNCHOSEN } = ANSWER;
const { COMMA, LINE } = REPLACEMENT;
const { FAIL } = GAME_MESSAGE;
const { close } = require("./Utils/MissionUtils");

const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #round = 0;
  #tries = 1;
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

    gameCommand(this.retry.bind(this));
  }

  mark(top, bottom) {
    this.#userState.top.push(top);
    this.#userState.bottom.push(bottom);

    this.designMap();
  }

  designMap() {
    const top = String(this.#userState.top).replaceAll(COMMA, LINE);
    const bottom = String(this.#userState.bottom).replaceAll(COMMA, LINE);

    gameMap(top, bottom);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(restartOrQuit) {
    if (restartOrQuit === RESTART) {
      this.#tries += 1;
      this.reset();
      moving(this.move.bind(this));
    }
    if (restartOrQuit === QUIT) {
      gameResult(FAIL, this.designMap.bind(this), this.#tries);
      close();
    }
  }

  reset() {
    this.#round = 0;
    this.#userState = { top: [], bottom: [] };
  }
}

module.exports = BridgeGame;
