class ErrorMessage {
  static base = "[ERROR]";
  static NOT_INTEGER = ErrorMessage.base + " 숫자값으로만 입력해주세요.";
  static NOT_VALID_DIRECTION =
    ErrorMessage.base + " 방향은 U,D 둘 중에 하나로만 입력해주세요.";
}

module.exports = ErrorMessage;
