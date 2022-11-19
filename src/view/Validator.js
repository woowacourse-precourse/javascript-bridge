const CONSTANT = require("../constants/Constant");
const OutputView = require('./OutputView.js');

const Validator = {
  validateBridgeSize(size) {
    try {
      if (size < 3 || size > 20 || !Number.isInteger(size)) throw Error('[ERROR] 다리 길이는 3 ~ 20 사이의 정수여야 합니다.');
    } 
    catch (e) {
      OutputView.printError(e);
      this.readBridgeSize();
    }
  },

  validateDirection(direction) {
    const { DIRECTION } = CONSTANT;

    try {
      if (direction !== DIRECTION.UP && direction !== DIRECTION.DOWN) throw Error('[ERROR] 위 아래 방향은 U와 D로 입력하세요');
    }
    catch (e) {
      OutputView.printError(e);
      this.readMoving();
    }
  },

  validateRestart(input) {
    const { RESTART } = CONSTANT;

    try {
      if (input !== RESTART.RESTART && input !== RESTART.QUIT) throw Error('[ERROR] 재시작 값은 R과 Q로 입력하세요');
    }
    catch (e) {
      OutputView.printError(e);
      this.readGameCommand();
    }
  }
}

module.exports = Validator;
