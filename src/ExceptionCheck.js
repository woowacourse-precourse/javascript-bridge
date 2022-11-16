const ExceptionCheck = {
  LOWER_INCLUSIVE: 3,
  UPPER_INCLUSIVE: 20,

  bridgeSize(bridgeSize) {
    this.number(bridgeSize);
    this.range(bridgeSize);
  },

  number(bridgeSize) {
    const numberRegEx = /[^0-9]/g;
    if (numberRegEx.test(bridgeSize))
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  },

  range(bridgeSize) {
    if (bridgeSize < this.LOWER_INCLUSIVE || bridgeSize > this.UPPER_INCLUSIVE)
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  },
};

module.exports = ExceptionCheck;
