class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause.message;
    this.name = '[ERROR]';
  }
}

module.exports = ReadError;
