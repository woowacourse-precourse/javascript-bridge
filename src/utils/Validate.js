const Constant = require("./Constant");
class Validate {
  //다리 크기 입력검증
  static validateBridgeSize(bridgeSize) {
    if (isNaN(bridgeSize)) {
      throw new Error(Constant.ERROR.ONLY_NUMBER);
    }
    if (
      bridgeSize < Constant.BRIDGE_MIN_SIZE ||
      bridgeSize > Constant.BRIDGE_MAX_SIZE
    ) {
      throw new Error(Constant.ERROR.BRIDGE_SIZE);
    }
    if (String(bridgeSize).length > 2) {
      throw new Error(Constant.ERROR.ONLY_ONE_NUMBER);
    }
  }

  //사용자 움직일 칸에 대한 입력 유효성 검사
  static validateUserInputMove(userInput) {
    let regexOnlyUorD = /[UD]/g;
    if (!regexOnlyUorD.test(userInput)) {
      throw new Error(Constant.ERROR.ONLY_U_OR_D);
    }
    if (
      userInput === Constant.UP.toLowerCase() ||
      userInput === Constant.DOWN.toLowerCase()
    ) {
      throw new Error(Constant.ERROR.ONLY_UPPERCASE);
    }
    if (userInput.length >= 2) {
      throw new Error(Constant.ERROR.ONLY_INPUT_ONE);
    }
  }

  //게임 다시 시작할 지 입력할 때 검증
  static validateUserInputRetry(inputRetry) {
    let regexOnlyRorD = /[RQ]/g;
    if (!regexOnlyRorD.test(inputRetry)) {
      throw new Error(Constant.ERROR.ONLY_R_OR_Q);
    }
    if (
      inputRetry === Constant.RETRY.toLowerCase() ||
      inputRetry === Constant.QUIT.toLowerCase()
    ) {
      throw new Error(Constant.ERROR.ONLY_UPPERCASE);
    }
    if (inputRetry.length >= 2) {
      throw new Error(Constant.ERROR.ONLY_INPUT_ONE);
    }
  }
}

module.exports = Validate;
