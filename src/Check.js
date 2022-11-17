const Check = {
  checkBrideSize(size) {
    this.checkNumber(size);
    this.checkRange(size);
  },

  checkNumber(size) {
    if (isNaN(size)) {
      throw new Error("[ERROR] 다리 길이는 숫자여야 합니다.");
    }
  },

  checkRange(size) {
    const MINIMUM_SIZE = 3;
    const MAXIMUM_SIZE = 20;

    if (size < MINIMUM_SIZE || size > MAXIMUM_SIZE) {
      throw new Error("[ERROR] 다리 길이는 3 이상 20 이하인 숫자여야 합니다.");
    }
  },
};

module.exports = Check;
