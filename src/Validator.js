const ErrorMessages = require('./ErrorMessage');

class Validator {
  checkBridgeSize(input) {
    if (isNaN(input)) {
      throw new Error(ErrorMessages.NOT_NUMBER);
    }
    if (input * 1 < 3 || input * 1 > 20) {
      throw new Error(ErrorMessages.INVALID_SIZE);
    }
  }

  checkUserMoving(input) {
    if (input !== 'U' && input !== 'D') {
      throw new Error(ErrorMessages.U_OR_D);
    }
  }

  checkRestartOrQuit(input) {
    if (input !== 'R' && input !== 'Q') {
      throw new Error('[ERROR] 대문자 R 또는 Q를 입력해주세요.');
    }
  }
}
module.exports = Validator;
