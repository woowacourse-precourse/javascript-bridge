class Validation {
  static checkBridgeLength(bridgeLen) {

    if (Validation.isEmpty(bridgeLen)) {
      throw new Error("[ERROR] 잘못된 입력값 입니다.");
    }

    if (Validation.isNumber(bridgeLen)) {
      throw new Error("[ERROR] 숫자가 아닌 값을 입력하였습니다. 3 이상 25 이하의 숫자를 입력해주세요.");
    }
  }

  static isEmpty(input) {
    return input.length === 0;
  }

  static isNumber(input ) {
    return isNaN(input);
  }
}


module.exports = Validation;