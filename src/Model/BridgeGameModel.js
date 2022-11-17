const { KEYWORD } = require("../constants/index.js");

const BridgeGameModel = class {
  #user;
  #bridge;
  #try;
  constructor() {}

  try(brige) {
    this.#try = 1;
    this.#bridge = brige;
    this.#user = [];
  }

  retry() {
    this.#try += 1;
    this.#user = [];
  }

  jumpUp() {
    const { UP } = KEYWORD;
    this.#user.push(UP);
    const data = { user: this.#user, bridge: this.#bridge };
    return data;
  }
};

module.exports = BridgeGameModel;

// ? 데이터를 받고
// ? data: 사용자의 위치 히스토리 / 맵 / 시도 횟수
// ? method:  jumpUp, jumpDown, checkBridgeMap, checkUser
