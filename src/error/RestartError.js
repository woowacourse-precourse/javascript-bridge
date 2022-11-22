const { ERROR_MESSAGE } = require("../model/component");
class RestartError {
  #startEnd;
  constructor(startEnd) {
    this.validate(startEnd);
    this.#startEnd = startEnd;
  }

  validate(startEnd) {
    if (!(startEnd === "R" || startEnd === "Q")) {
      throw new Error(ERROR_MESSAGE.RESTART_ERROR_MESSAGE);
    }
  }
}

module.exports = RestartError;
