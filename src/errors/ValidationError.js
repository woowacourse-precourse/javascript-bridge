const AppError = require('./AppError');

/**
 * 값 검증 중 발생하는 에러입니다.
 */
class ValidationError extends AppError {}

module.exports = ValidationError;
