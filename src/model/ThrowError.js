class ThrowError {
  #errorMessage;

  constructor(errorMessage) {
    this.#errorMessage = errorMessage;
  }

  happen() {
    this.#makeError(this.#errorMessage);
  }

  #makeError(errorMessage) {
    throw new Error(errorMessage);
  }
}

module.exports = ThrowError;
