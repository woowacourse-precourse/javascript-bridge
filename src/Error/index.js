const BridgeGameSizeError = class extends Error {
  constructor() {
    super();
    this.message = "[ERROR] 3~20 사이의 숫자를 입력해주세요.";
    this.name = "BridgeGameSizeError";
  }
};

const BridgeGameMoveError = class extends Error {
  constructor() {
    super();
    this.message = "[ERROR] 'U' 또는 'D'를 입력해주세요.";
    this.name = "BridgeGameMoveError";
  }
};

const BridgeGameRetryError = class extends Error {
  constructor() {
    super();
    this.message = "[ERROR] 'R' 또는 'Q'를 입력해주세요.";
    this.name = "BridgeGameRetryError";
  }
};

module.exports = {
  BridgeGameSizeError,
  BridgeGameMoveError,
  BridgeGameRetryError,
};
