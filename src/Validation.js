const Validation = {
  checkBridgeSize(size) {
    if (isNaN(size))
      return { errorMsg: '\n[ERROR] 숫자만 입력할 수 있습니다.\n' };

    if (size < 3 || size > 20)
      return {
        errorMsg: '\n[ERROR] 3 이상 20 이하의 숫자만 입력할 수 있습니다.\n',
      };

    return { errorMsg: undefined };
  },
};

module.exports = Validation;
