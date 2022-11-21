class InValidInputError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
  }
}
module.exports = InValidInputError;
