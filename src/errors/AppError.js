/**
 * 앱 실행 중 발생하는 모든 에러입니다.
 */
class AppError extends Error {
  static PREFIX = '[ERROR]';

  /** @type {string} */
  name;

  constructor(message) {
    super(`${AppError.PREFIX} ${message}`);
    this.name = this.constructor.name;
  }
}

module.exports = AppError;
