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
};

module.exports = BridgeGameModel;

// ? 데이터를 받고
// ? data: 사용자의 위치 히스토리 / 맵 / 시도 횟수
// ? method:  jumpUp, jumpDown, checkBridgeMap, checkUser
