const Validator = {
  checkNumber(userInput) {
    if (!userInput.match(/^[0-9]+$/)) {
      throw new Error('숫자를 입력해주세요.');
    }
  },

  checkRange(userInput) {
    if (userInput < 3 || userInput > 20) {
      throw new Error('3이상 20이하의 숫자를 입력해주세요.');
    }
  },
};

module.exports = Validator;
