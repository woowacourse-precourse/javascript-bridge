class Validation {
  #validate(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  }

  isInRange(number) {}

  isMovement(string) {}

  isRetry(string) {}
}
module.exports = Validation;
