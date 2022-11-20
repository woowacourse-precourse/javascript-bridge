class Validator {
  checkBridgeLengthInput(bridgeLength) {
    if (this.isNotNumber(bridgeLength)) {
      throw new Error('[ERROR] 다리 길이는 숫자만 입력 가능합니다.');
    }
    if (this.isNotRangeOfBridgeLength(bridgeLength)) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  }

  checkDirectionInput(direction) {
    if (this.isNotValidDirectionInput(direction)) {
      throw new Error('[ERROR] 이동할 칸은 위: U, 아래: D 만 입력 가능합니다.')
    }
  }

  checkRetryInput(input) {

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

  isNotValidRetryInput(input) {
    return input !== 'R' || input !== 'Q';
  }
}

module.exports = Validator;
