const AppError = require('./AppError');

/**
 * 다리 건너기 로직 수행 중 발생하는 에러입니다.
 */
class BridgeError extends AppError {}

module.exports = BridgeError;
