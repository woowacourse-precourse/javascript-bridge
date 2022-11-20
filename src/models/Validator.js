class Validator {
  checkBridgeLengthInput(bridgeLength) {

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
}

module.exports = Validator;
