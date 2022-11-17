const Validation = {
  checkBridgeSize(input) {
    if (isNaN(input) === true) {
      throw new Error('[ERROR] 다리 길이는 숫자여야 합니다.');
    }

    if (Number.isInteger(Number(input)) === false) {
      throw new Error('[ERROR] 다리 길이는 실수가 아닌 정수여야 합니다.');
    }
    
    if (input < 3 || 20 < input) {
      throw new Error('[ERROR] 다리 길이는 3 이상 20 이하의 숫자여야 합니다.');
    }
  }
};

module.exports = Validation;
