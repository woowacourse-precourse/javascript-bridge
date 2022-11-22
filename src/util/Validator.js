const Validator = {
  isVaildBridgeSize(input) {
    if (input < 3 || input > 20) {
      throw new Error("[ERROR] 3과 20사이의 숫자만 입력하세요.");
    }
    return true;
  },
  isVaildBridgeSizeNum(input) {
    const numPattern = /^[0-9]*$/g;
    if (!numPattern.test(input)) {
      throw new Error("[ERROR] 숫자만 입력하세요.");
    }
    return true;
  },
  isVaildUorD(input) {
    if (input !== "U" && input !== "D") {
      throw new Error('[ERROR] "U" 또는 "D"만 입력가능합니다.');
    }
    return true;
  },
  isVaildRorQ(input) {
    if (input !== "R" && input !== "Q") {
      throw new Error('[ERROR] "R" 또는 "Q"만 입력가능합니다.');
    }
    return true;
  },
};

module.exports = Validator;
