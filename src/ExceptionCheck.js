const ExceptionCheck = {
  LOWER_INCLUSIVE: 3,
  UPPER_INCLUSIVE: 20,

  checkBridgeSize(size) {
    this.number(size);
    this.range(size);
  },

  number(size) {
    const numberRegEx = /[^0-9]/g;
    if (numberRegEx.test(size))
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  },

  range(size) {
    if (size < this.LOWER_INCLUSIVE || size > this.UPPER_INCLUSIVE)
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  },

  checkMove(playerMove) {
    if (playerMove === "U" || playerMove === "D") return;
    else throw new Error("player이동은 U 또는 D만 입력해야 합니다.");
  },
};

module.exports = ExceptionCheck;
