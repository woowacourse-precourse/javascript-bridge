class Validation {
  static checkBridgeSize(size) {
    if (size < 3 || size > 20) throw new Error();
    if (isNaN(size)) throw new Error();
  }

  static checkDirectionInput(direction) {
    if (!this.#isValidDirection(direction)) throw new Error();
  }

  static #isValidDirection(direction) {
    return direction === "D" || direction === "U";
  }
}

module.exports = Validation;
