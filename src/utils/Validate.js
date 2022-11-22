const Constant = require("./Constant");
class Validate {
  //다리 크기 입력검증
  static validateBridgeSize(bridgeSize) {
    if (String(bridgeSize).length > 2) {
      throw new Error(Constant.ERROR.ONLY_ONE_NUMBER);
    }
    if (isNaN(bridgeSize)) {
      throw new Error(Constant.ERROR.ONLY_NUMBER);
    }
    if (bridgeSize < 3 || bridgeSize > 20) {
      throw new Error(Constant.ERROR.BRIDGE_SIZE);
    }
  }

  //사용자 움직일 칸에 대한 입력 유효성 검사
  static validateUserInputMove(userInput) {
    if (userInput === "u" || userInput === "d") {
      throw new Error(Constant.ERROR.ONLY_UPPERCASE);
    }
    if (!/[UD]/g.test(userInput)) {
      throw new Error(Constant.ERROR.ONLY_U_OR_D);
    }
    if (userInput.length >= 2) {
      throw new Error(Constant.ERROR.ONLY_INPUT_ONE);
    }
  }

  //게임 다시 시작할 지 입력할 때 검증
  static validateUserInputRetry(inputRetry) {
    if (inputRetry === "r" || inputRetry === "q") {
      throw new Error(Constant.ERROR.ONLY_UPPERCASE);
    }
    if (!/[RQ]/g.test(inputRetry)) {
      throw new Error(Constant.ERROR.ONLY_R_OR_Q);
    }
    if (inputRetry.length >= 2) {
      throw new Error(Constant.ERROR.ONLY_INPUT_ONE);
    }
  }
}

module.exports = Validate;
