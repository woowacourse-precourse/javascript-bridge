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
}

module.exports = Validator;
