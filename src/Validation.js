const Validation = {
  isVaildBridgeSize(size) {
    this.isVaildNumber(size);
    this.isVaildRange(size);
  },

  isVaildNumber(size) {
    if (isNaN(size)) {
      throw new Error("[ERROR] 다리 길이는 숫자여야 합니다.");
    }
  },

  isVaildRange(size) {
    if (size < 3 || size > 20) {
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  },
};

module.exports = Validation;
