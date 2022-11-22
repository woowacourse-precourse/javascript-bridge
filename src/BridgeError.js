const {Console} = require("@woowacourse/mission-utils");
const {MESSAGE} = require("./constants/CONSTANT");

const BridgeError = {
  size(size){
    try {
      throw new Error(`[ERROR] "${size}"는 올바른 입력값이 아닙니다.`)
    } catch (error) {
      Console.print(error.message);
      Console.print(MESSAGE.ERROR.SIZE);
      return false;
    }
  },
  move(moveInput) {
    try {
      throw new Error(`[ERROR] "${moveInput}"는 올바른 입력값이 아닙니다.`)
    } catch (error) {
      Console.print(error.message);
      Console.print(MESSAGE.ERROR.MOVE);
      return false;
    }
  },
  command(command) {
    try {
      throw new Error(`[ERROR] "${command}"는 올바른 입력값이 아닙니다.`)
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  },
}

module.exports = BridgeError;