const Validation = {
  /**
   * 플레이어가 게임 중 입력한 다리 길이 값이 형식에 어긋날 경우 예외를 발생시킵니다.
   * @param {string} playerInput - 플레이어의 입력
   */
  validateBridgeSize(input) {
    const inputSize = Number(input);
    if (!Validation.isValidSizeType(input)) {
      throw new Error("[ERROR] 다리 길이는 숫자여야 합니다.");
    }
    if (!Validation.isValidSizeRange(inputSize)) {
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
    if (!Validation.isValidSizeNumber(inputSize)) {
      throw new Error("[ERROR] 다리 길이는 자연수여야 합니다.");
    }
  },

  isValidSizeRange(size) {
    return 3 <= size && size <= 20;
  },

  isValidSizeNumber(size) {
    return Number.isInteger(size);
  },

  isValidSizeType(input) {
    return !isNaN(input);
  },
};

module.exports = Validation;
