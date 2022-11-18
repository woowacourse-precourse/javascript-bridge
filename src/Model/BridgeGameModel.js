const { SIZE, KEYWORD, HASH } = require("../constants/index.js");
const {
  BridgeGameSizeError,
  BridgeGameMoveError,
} = require("../Error/index.js");

const BridgeGameModel = class {
  #user = [];
  #bridge = [];
  #try = 1;

  try(brige) {
    this.#bridge.push(...brige);
  }

  retry() {
    this.#try += 1;
    this.#user = [];
  }

  jump(move) {
    this.#user.push(HASH[move]);
    const data = { user: this.#user, bridge: this.#bridge };
    return data;
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
};

module.exports = BridgeGameModel;

// ? 데이터를 받고
// ? data: 사용자의 위치 히스토리 / 맵 / 시도 횟수
// ? method:  jumpUp, jumpDown, checkBridgeMap, checkUser
