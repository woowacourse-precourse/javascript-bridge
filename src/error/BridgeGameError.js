class BridgeGameError extends Error {
  static PREFIX = '[ERROR]';

  name = 'BridgeGameError';

  /** @param {string} message */
  constructor(message) {
    super(`${BridgeGameError.PREFIX} ${message}`);
  }
}

module.exports = BridgeGameError;
