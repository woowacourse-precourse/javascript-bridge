class ErrorWithPrifix {
  constructor(message) {
    return new Error(`[ERROR] : ${message}`);
  }
}

module.exports = ErrorWithPrifix;
