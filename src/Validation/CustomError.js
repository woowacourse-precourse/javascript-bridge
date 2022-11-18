class CustomError extends Error {
  constructor(msg) {
    super(`[ERROR] ${msg}`);
  }
}
module.exports = CustomError;
