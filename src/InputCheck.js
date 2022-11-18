const InputCheck = {
  checkBridgeSize(inputBridgeSize) {
    this.isNumber(inputBridgeSize);
  },

  isNumber(inputBridgeSize) {
    if (isNaN(inputBridgeSize)) {
      throw new Error("[ERROR] 숫자만 입력해 주세요.");
    }
  },
};

module.exports = InputCheck;
