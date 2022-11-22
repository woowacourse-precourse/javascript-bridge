const Validation = {
  checkBridgeSize(size) {
    if (isNaN(size)) {
      return { errorMsg: "[ERROR] 숫자만 입력할 수 있습니다.\n" };
    }

    if (size < 3 || size > 20) {
      return {
        errorMsg: "[ERROR] 3이상 20이하의 숫자만 입력할 수 있습니다.\n",
      };
    }

    return { errorMsg: undefined };
  },

  checkDirection(direction) {
    if (direction === "U" || direction === "D") return { errorMsg: undefined };

    return { errorMsg: "[ERROR] U또는 D 알파벳만 입력이 가능합니다.\n" };
  },

  checkRetry(retry) {
    if (retry === "R" || retry === "Q") return { errorMsg: undefined };

    return { errorMsg: "[ERROR] R또는 Q 알파벳만 입력이 가능합니다.\n" };
  },
};

module.exports = Validation;
