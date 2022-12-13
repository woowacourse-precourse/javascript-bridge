const { ERROR_CODE, CustomError } = require("./Error");
const OutputView = require("./OutputView");

class Validator {
  static size(callback, { onError: errorCallback }) {
    return (size) => {
      try {
        this.#validateSize(size);
        callback(size);
      } catch (error) {
        OutputView.printMessage(error.message);
        errorCallback(callback);
      }
    };
  }

  static #validateSize(size) {
    if (isNaN(Number(size))) {
      throw new CustomError(ERROR_CODE.NOT_NUMBER);
    }

    if (size < 3 || size > 20) {
      throw new CustomError(ERROR_CODE.OUT_OF_RANGE);
    }
  }

  static direction(callback, { onError: errorCallback }) {
    return (direction) => {
      try {
        this.#validateDirection(direction);
        callback(direction);
      } catch (error) {
        OutputView.printMessage(error.message);
        errorCallback(callback);
      }
    };
  }

  static #validateDirection(direction) {
    if (direction !== "U" && direction !== "D") {
      throw new CustomError(ERROR_CODE.WRONG_DIRECTION);
    }
  }

  static command(callback, { onError: errorCallback }) {
    return (command) => {
      try {
        this.#validateCommand(command);
        callback(command);
      } catch (error) {
        OutputView.printMessage(error.message);
        errorCallback(callback);
      }
    };
  }

  static #validateCommand(command) {
    if (command !== "R" && command !== "Q") {
      throw new CustomError(ERROR_CODE.WRONG_COMMAND);
    }
  }
}

module.exports = Validator;
