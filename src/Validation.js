class Validation {
  static checkBridgeSize(size) {
    if (size < 3 || size > 20) throw Error;
    if (isNaN(size)) throw Error;
  }

  static checkDirectionInput(direction) {
    if (direction === "U" || direction === "D") throw new Error();
  }
}
module.exports = Validation;
