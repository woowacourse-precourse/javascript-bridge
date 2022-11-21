const Constant = require("./Constant");
class Validate {
  static validateBridgeSize(bridgeSize) {
    let bridgeSizeLength = String(bridgeSize).length;
    if (bridgeSize < 3 || bridgeSize > 20) {
      throw new Error(Constant.ERROR.BRIDGE_SIZE);
    }
    if (isNaN(Number(bridgeSize))) {
      throw new Error(Constant.ERROR.ONLY_NUMBER);
    }
    if (bridgeSizeLength > 2) {
      throw new Error(Constant.ERROR.ONLY_ONE_NUMBER);
    }
    return true;
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
    return true;
  }
  static validateUserInputRetry(inputRetry) {
    let regexOnlyRorQ = /[RQ]/g;
    if (!regexOnlyRorQ.test(inputRetry)) {
      throw new Error("R과 D만 입력하세요.");
    }
    if (inputRetry === "R".toLowerCase() || inputRetry === "Q".toLowerCase()) {
      throw new Error(Constant.ERROR.ONLY_UPPERCASE);
    }
    if (inputRetry.length >= 2) {
      throw new Error(Constant.ERROR.ONLY_INPUT_ONE);
    }

    return true;
  }
}

module.exports = Validate;
