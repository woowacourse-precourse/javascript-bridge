const ErrorMessage = {
  BRIDGE_LENGTH_INPUT: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
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
};

module.exports = Validation;
