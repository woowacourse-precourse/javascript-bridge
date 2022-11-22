const { SIZE, KEYWORD, HASH } = require("../constants/index.js");
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
    const { RETRY } = KEYWORD;
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
    const { RETRY } = KEYWORD;
    const retry = this.#retry.filter((retry) => retry === RETRY).length;
    return { retry, success: this.isSuccess(), map: this.read() };
  }

  isRetry() {
    const retry = this.#retry[this.#retry.length - 1];
    const { RETRY } = KEYWORD;
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
    const { MIN_SIZE, MAX_SIZE } = SIZE;
    const isBrige = length >= MIN_SIZE && length <= MAX_SIZE;
    if (!isBrige) throw new BridgeGameSizeError();
    return bridge;
  }

  checkDirection(move) {
    const { UP, DOWN } = KEYWORD;
    const isMove = move === UP || move === DOWN;
    if (!isMove) throw new BridgeGameMoveError();
    return move;
  }

  checkRetry(input) {
    const { RETRY, QUIT } = KEYWORD;
    const isRetry = input === RETRY || input === QUIT;
    if (!isRetry) throw new BridgeGameRetryError();
    return input;
  }
};

module.exports = BridgeGameModel;
