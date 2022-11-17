const Check = {
  checkBrideSize(size) {
    this.checkNumber(size);
  },

  checkNumber(size) {
    if (isNaN(size)) {
      throw new Error("[ERROR] 다리 길이는 숫자여야 합니다.");
    }
  },
};

module.exports = Check;
