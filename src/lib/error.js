const ERROR = {
  CHECK_BRIDGE_LENGTH: (input) => {
    if (Number.isNaN(Number(input))) {
      throw new Error("[ERROR] 숫자를 입력하세요.");
    }
    if (Number(input) % 1 != 0) {
      throw new Error("[ERROR] 정수를 입력하세요.");
    }
    if (Number(input) < 3 || Number(input) > 20) {
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  },

  CHECK_WHERE_TO_GO: (input) => {
    if (input != "U" && input != "D") {
      console.log(input);
      throw new Error("[ERROR] U나 D 중 하나를 입력하세요.");
    }
  },
  CHECK_ARE_YOU_END: (input) => {
    if (input != "R" && input != "Q") {
      throw new Error("[ERROR] R이나 Q 중 하나를 입력하세요.");
    }
  },
};

module.exports = {
  ERROR,
};
