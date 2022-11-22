const Validator = {
  checkNumber(userInput) {
    if (!userInput.match(/^[0-9]+$/)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
  },

  checkRange(userInput) {
    if (userInput < 3 || userInput > 20) {
      throw new Error('[ERROR] 3이상 20이하의 숫자를 입력해주세요.');
    }
  },

  checkDirection(userInput) {
    if (userInput !== 'U' && userInput !== 'D') {
      throw new Error('[ERROR] U 또는 D를 입력해주세요.');
    }
  },
};

module.exports = Validator;
