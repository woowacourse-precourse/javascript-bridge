const {
  SIZE: { MIN_SIZE, MAX_SIZE },
  KEYWORD: { RETRY, QUIT, UP, DOWN },
  HASH,
} = require("../constants/index.js");
const {
  BridgeGameSizeError,
  BridgeGameMoveError,
  BridgeGameRetryError,
} = require("../error/BridgeGameError.js");

const BridgeGameModel = class {
  #directions = [];
  #bridge = [];
  #retry = [];

  initialize() {
    this.#directions = [];
  }

  start(bridge) {
    this.#retry.push(RETRY);
    this.#bridge.push(...bridge);
  }

  retry(attempt) {
    this.#retry.push(HASH[attempt]);
  }

  update(move) {
    this.#directions.push(HASH[move]);
    return this.read();
  }

  read() {
    return { directions: this.#directions, bridge: this.#bridge };
  }

  result() {
    const retry = this.#retry.filter((retry) => retry === RETRY).length;
    return { retry, success: this.isSuccess(), map: this.read() };
  }

  isRetry() {
    const retry = this.#retry[this.#retry.length - 1];
    return retry === RETRY;
  }

  isSuccess() {
    return JSON.stringify(this.#directions) === JSON.stringify(this.#bridge);
  }

  isPass() {
    const currentIndex = this.#directions.length - 1;
    return this.#directions[currentIndex] !== this.#bridge[currentIndex];
  }

  checkBridge(bridge) {
    const length = bridge.length;
    const isBrige = length >= MIN_SIZE && length <= MAX_SIZE;
    if (!isBrige) throw new BridgeGameSizeError();
    return bridge;
  }

  checkDirection(move) {
    const isMove = move === UP || move === DOWN;
    if (!isMove) throw new BridgeGameMoveError();
    return move;
  }

  checkRetry(input) {
    const isRetry = input === RETRY || input === QUIT;
    if (!isRetry) throw new BridgeGameRetryError();
    return input;
  }
};

module.exports = BridgeGameModel;
