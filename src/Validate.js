const Validate = {
  isNumber(input) {
    const redex = /[^0-9]/g;
    if (input.match(redex))
      throw new Error("[ERROR] 다리 길이가 숫자가 아닙니다.", input);
  },
  isBigger(input) {
    const number = parseInt(input);
    if (number > 20) throw new Error("[ERROR] 다리 길이가 너무 큽니다.", input);
  },
  isLower(input) {
    const number = parseInt(input);
    if (number < 3)
      throw new Error("[ERROR] 다리 길이가 너무 작습니다.", input);
  },
  isCorrectMove(input) {
    if (input !== "U" && input !== "D")
      throw new Error("[ERROR] 이동할 칸이 올바르지 않습니다.", input);
  },
  isCorrectRetry(input) {
    if (input !== "R" && input !== "Q")
      throw new Error("[ERROR] 이동할 칸이 올바르지 않습니다.", input);
  },
  isUndefined(input) {
    if (input === undefined) {
      throw new Error("[ERROR] 전달된 값이 올바르게 참조되지 않습니다.");
    }
  },
};

module.exports = Validate;
