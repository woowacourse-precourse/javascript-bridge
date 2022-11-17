class Validation {
  static checkBridgeLength(bridgeLen) {
    if (Validation.isEmpty(bridgeLen)) {
      throw new Error("[ERROR] 잘못된 입력값 입니다.");
    }
  }

  static isEmpty(input) {
    return input.length === 0;
  }
}

module.exports = Validation;