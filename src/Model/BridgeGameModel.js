const { SIZE, KEYWORD, HASH } = require("../constants/index.js");
const {
  BridgeGameSizeError,
  BridgeGameMoveError,
  BridgeGameRetryError,
} = require("../Error/index.js");

const BridgeGameModel = class {
  #user = [];
  #bridge = [];
  #attempt = [];

  try(brige) {
    const { RETRY } = KEYWORD;
    this.#attempt.push(RETRY);
    this.#bridge.push(...brige);
  }

  attempt(attempt) {
    this.#attempt.push(HASH[attempt]);
    this.#user = [];
  }

  jump(move) {
    this.#user.push(HASH[move]);
    const data = { user: this.#user, bridge: this.#bridge };
    return data;
  }

  result() {
    const { RETRY } = KEYWORD;
    const retry = this.#attempt.filter((attemp) => attemp === RETRY).length;
    const success = this.isSuccess();
    const data = { retry, success };
    return data;
  }

  isRetry() {
    const attempt = this.#attempt[this.#attempt.length - 1];
    const { RETRY } = KEYWORD;
    return attempt === RETRY;
  }

  isSuccess() {
    return JSON.stringify(this.#user) === JSON.stringify(this.#bridge);
  }

  isFail() {
    const currentIndex = this.#user.length - 1;
    return this.#user[currentIndex] !== this.#bridge[currentIndex];
  }

  checkBridge(bridge) {
    const length = bridge.length;
    const { MIN_SIZE, MAX_SIZE } = SIZE;
    const isBrige = length >= MIN_SIZE && length <= MAX_SIZE;
    if (!isBrige) throw new BridgeGameSizeError();
  }

  checkUser(move) {
    const { UP, DOWN } = KEYWORD;
    const isMove = move === UP || move === DOWN;
    if (!isMove) throw new BridgeGameMoveError();
  }

  checkRetry(input) {
    const { RETRY, QUIT } = KEYWORD;
    const isRetry = input === RETRY || input === QUIT;
    if (!isRetry) throw new BridgeGameRetryError();
  }
};

module.exports = BridgeGameModel;

// ? 데이터를 받고
// ? data: 사용자의 위치 히스토리 / 맵 / 시도 횟수
// ? method:  jumpUp, jumpDown, checkBridgeMap, checkUser
