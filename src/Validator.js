const Validator = {
  validateInput(number) {
    if (3 > number || number > 20) {
      throw "[ERROR] 3 이상 20 이하의 숫자만 입력 가능합니다.";
    }
  },
};

module.exports = Validator;


