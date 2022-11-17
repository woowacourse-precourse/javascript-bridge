// const {ERROR} = require('./constants');

const Validation = {
  checkType(input) {
    if (Number.isNaN(input))
      throw '[ERROR] 문자와 기호를 제외한 숫자를 입력해주세요.';
  },

  checkRange(input) {
    if (input < 3 || input > 20)
      throw '[ERROR] 다리의 길이는 3 이상 20 이하만 가능합니다.';
  },
};

module.exports = Validation;
