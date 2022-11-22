const {
  ERROR: { SIZE_ERROR, MOVE_ERROR, RETRY_ERROR },
} = require("../constants/index.js");

const BridgeGameSizeError = class extends Error {
  constructor() {
    super();
    this.message = SIZE_ERROR;
    this.name = "BridgeGameSizeError";
  }
};

const BridgeGameMoveError = class extends Error {
  constructor() {
    super();
    this.message = MOVE_ERROR;
    this.name = "BridgeGameMoveError";
  }
};

const BridgeGameRetryError = class extends Error {
  constructor() {
    super();
    this.message = RETRY_ERROR;
    this.name = "BridgeGameRetryError";
  }
};

module.exports = {
  BridgeGameSizeError,
  BridgeGameMoveError,
  BridgeGameRetryError,
};
