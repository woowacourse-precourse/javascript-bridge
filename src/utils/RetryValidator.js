class RetryValidator {
  static validateRetry(retryInput) {
    if (!(retryInput === "R" || retryInput === "Q")) {
      throw new Error("[ERROR] 잘못된 입력입니다. R 또는 Q를 입력해주세요.");
    }
  }
}

module.exports = RetryValidator;
