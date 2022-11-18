const InputCheck = {
  checkBridgeSize(inputBridgeSize) {
    this.isNumber(inputBridgeSize);
    this.isCorrectRange(inputBridgeSize)
  },

  isNumber(inputBridgeSize) {
    if (isNaN(inputBridgeSize)) {
      throw new Error("[ERROR] 숫자만 입력해 주세요.");
    }
  },

  isCorrectRange(inputBridgeSize) {
    if (inputBridgeSize < 3 || inputBridgeSize > 20) {
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  }
};

module.exports = InputCheck;
