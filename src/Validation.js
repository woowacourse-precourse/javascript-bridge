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
  /**
   * 플레이어가 게임 중 입력한 이동할 칸 값이 형식에 어긋날 경우 예외를 발생시킵니다.
   * @param {string} playerInput - 플레이어의 입력
   */
  validateMoving(input) {
    if (!this.isValidMovingType(input)) {
      throw new Error("[ERROR] 이동할 칸은 알파벳을 입력해야 합니다.");
    }

    if (!this.isValidMovingLength(input)) {
      throw new Error("[ERROR 이동할 칸은 한 개의 문자열을 입력해야 합니다.");
    }

    if (!this.isValidMoving(input)) {
      throw new Error("[ERROR] 이동할 칸은 U 또는 D를 입력해야 합니다.");
    }
  },

  isValidMovingType(input) {
    const regex = /^[a-z|A-Z]+$/;
    return regex.test(input);
  },

  isValidMovingLength(input) {
    return input.length === 1;
  },

  isValidMoving(input) {
    return input === "U" || input === "D";
  },
};

module.exports = Validation;
