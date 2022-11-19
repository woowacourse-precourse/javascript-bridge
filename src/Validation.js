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
};

module.exports = Validation;
