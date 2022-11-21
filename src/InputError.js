class InputError extends Error {
  constructor(kind, message) {
    super(message);
    this.kind = kind;
  }
}
module.exports = InputError;
