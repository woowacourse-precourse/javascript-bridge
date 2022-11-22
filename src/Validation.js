const ErrorMessage = {
  BRIDGE_LENGTH_INPUT: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  BRIDGE_MOVE_INPUT: "[ERROR] 입력값은 D 또는 U 둘 중의 하나만 입력해 주세요.",
};

const Validation = {
  /**
   *
   * @param {*} input
   */
  validateBridgeNumber(input) {
    if (!/^\d+$/.test(input)) throw Error(ErrorMessage.BRIDGE_LENGTH_INPUT);
    if (input < 3 || input > 20) throw Error(ErrorMessage.BRIDGE_LENGTH_INPUT);
  },
  /**
   *
   * @param {*} input
   */
  validateBridgeMove(input) {
    if (input !== "U" && input !== "D")
      throw Error(ErrorMessage.BRIDGE_MOVE_INPUT);
  },
};

module.exports = Validation;
