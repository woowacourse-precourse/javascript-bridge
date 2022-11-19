class Validation {
  static checkBridgeSize(size) {
    if (size < 3 || size > 20) throw Error;
    if (isNaN(size)) throw Error;
  }
}
module.exports = Validation;
