class BridgeGameError extends Error {
  static PREFIX = '[ERROR]';

  name = 'BridgeGameError';

  constructor(message) {
    super(`${BridgeGameError.PREFIX} ${message}`);
  }
}

module.exports = BridgeGameError;
