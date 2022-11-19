class CustomError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
  }
}
module.exports = CustomError;
