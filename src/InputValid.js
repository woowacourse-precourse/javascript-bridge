const { ERROR_MESSAGE, MOVE_VALID, RETRY_VALID } = require("./Constants");

class BridgeSizeValid {
  #answer;

  constructor(answer) {
    this.validate(answer);
    this.#answer = Number(answer);
  }

  validate(answer) {
    if (Number.isNaN(answer) === true) {
      throw new Error(ERROR_MESSAGE.SIZE);
    }
    if (answer%1!==0) {
      throw new Error(ERROR_MESSAGE.SIZE);
    }
    if (answer<3 || answer>20) {
      throw new Error(ERROR_MESSAGE.SIZE);
    }
  }

  getSize() {
    return this.#answer;
  }
}


class MovingValid {
  #answer;

  constructor(answer) {
    this.validate(answer);
    this.#answer = answer;
  }

  validate(answer) {
    if(!MOVE_VALID.includes(answer)) {
      throw new Error(ERROR_MESSAGE.MOVE);
    }
  }

  getMove() {
    return this.#answer;
  }
}


class RetryValid {
  #answer;

  constructor(answer) {
    this.validate(answer);
    this.#answer = answer;
  }

  validate(answer) {
    if(!RETRY_VALID.includes(answer)) {
      throw new Error(ERROR_MESSAGE.RETRY);
    }
  }

  getRetry() {
    return this.#answer;
  }
}

module.exports = { BridgeSizeValid, MovingValid, RetryValid };