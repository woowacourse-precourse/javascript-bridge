const Validation = {
  validateBridgeLength(length) {
    const errorMessage = "[ERROR] 입력할 수 있는 숫자의 범위를 초과하였습니다.";
    if (length < 2 || length > 20) throw new Error(errorMessage);
  },
};

module.exports = Validation;
