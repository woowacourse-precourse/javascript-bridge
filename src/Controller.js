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
const { SUCCESS, FAIL } = GAME_MESSAGE;
const { close } = require("./Utils/MissionUtils");

const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class Controller {
  #bridge;
  #round = 0;
  #tries = 1;
  #userState = { top: [], bottom: [] };

  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  start() {
    gameStart();
    bridgeSize(this.generateBridge.bind(this));
  }

  generateBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(
      Number(size),
      BridgeRandomNumberGenerator.generate
    );

    moving(this.passOrFail.bind(this));
  }

  passOrFail(command) {
    if (command === this.#bridge[this.#round]) {
      this.#round += 1;
      return this.bridgeGame.move(command, this.traversable.bind(this));
    }

    if (command !== this.#bridge[this.#round]) {
      this.#round += 1;
      return this.bridgeGame.move(command, this.untraversable.bind(this));
    }
  }

  traversable(command) {
    command === UP ? this.mark(RIGHT, UNCHOSEN) : this.mark(UNCHOSEN, RIGHT);

    if (this.#round === this.#bridge.length) {
      gameResult(SUCCESS, this.designMap.bind(this), this.#tries);

      return close();
    }

    moving(this.passOrFail.bind(this));
  }

  untraversable(command) {
    command === UP ? this.mark(WRONG, UNCHOSEN) : this.mark(UNCHOSEN, WRONG);

    gameCommand(this.askRetry.bind(this));
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

  askRetry(restartOrQuit) {
    if (restartOrQuit === RESTART) {
      return this.bridgeGame.retry(restartOrQuit, this.restart.bind(this));
    }
    if (restartOrQuit === QUIT) {
      return this.bridgeGame.retry(restartOrQuit, this.quit.bind(this));
    }
  }

  restart() {
    this.#tries += 1;
    this.reset();
    return moving(this.passOrFail.bind(this));
  }

  reset() {
    this.#round = 0;
    this.#userState = { top: [], bottom: [] };
  }

  quit() {
    gameResult(FAIL, this.designMap.bind(this), this.#tries);
    close();
  }
}

module.exports = Controller;
