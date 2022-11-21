class Validation {
  static isBridgeSizeValid(number) {
    if (!(this.isValidRange(number) && this.isValidType(number))) {
      throw new Error('[ERROR] 3~20 사이 숫자만 입력 가능합니다.');
    }
  }

  static isValidType(number) {
    const typeRegex = /^[0-9]+$/;
    return typeRegex.test(+number);
  }

  static isValidRange(number) {
    return +number >= 3 && +number <= 20;
  }

  static isUserMoveValid(userMove) {
    if (!(this.isUserMoveChar(userMove) && this.isUserInputLength(userMove))) {
      throw new Error('[ERROR] 대문자 U나 D만 입력 가능합니다.');
    }
  }

  static isUserMoveChar(userMove) {
    const Regex = /[U|D]/g;
    return Regex.test(userMove);
  }

  static isUserRetryChar(userMove) {
    const Regex = /[R|Q]/g;
    return Regex.test(userMove);
  }

  static isUserInputLength(userMove) {
    return userMove.length === 1;
  }

  static isUserRetryValid(userRetry) {
    if (
      !(this.isUserRetryChar(userRetry) && this.isUserInputLength(userRetry))
    ) {
      throw new Error('[ERROR] 대문자 R이나 Q만 입력 가능합니다.');
    }
  }
}

module.exports = Validation;
