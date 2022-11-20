class Validator {
  checkBridgeLengthInput(bridgeLength) {
    if (this.isNotNumber(bridgeLength)) {
      throw new Error('[ERROR] 다리 길이는 숫자만 입력 가능합니다.');
    }
    if (this.isNotRangeOfBridgeLength(bridgeLength)) {
      throw new Error('[ERROR] 다리 길이는 3 이상 20 이하만 입력 가능합니다.');
    }
  }

  checkDirectionInput(direction) {

  }

  checkRetryInput(retry) {

  }

  isNotNumber(num) {
    const check = /^[0-9]+$/; 
    return !check.test(num);
  }

  isNotRangeOfBridgeLength(bridgeLength) {
    return bridgeLength < 3 || bridgeLength > 20; 
  }

  isNotValidDirectionInput(direction) {
    return direction !== 'U' || direction !== 'D';
  }
}

module.exports = Validator;
