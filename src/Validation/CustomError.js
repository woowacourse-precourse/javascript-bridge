class CustomError extends Error {
  constructor(name, msg) {
    super(`[ERROR] ${msg}`);
    this.name = name;
  }
}
module.exports = CustomError;
