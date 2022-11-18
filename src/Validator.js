const { Console } = require('@woowacourse/mission-utils');

const Validator = {
  sizeValidityCheck: (size) => {
    const regex = /^\d+$/;
    Validator.throwErrorIfHasBlank(size);
    if (!regex.test(size)) throw '[ERROR] 숫자를 입력해야 합니다.';
    if (size < 3 || size > 20) {
      throw '[ERROR] 3이상 20이하의 숫자를 입력해야 합니다.';
    }
  },

  directionValidityCheck: (direction) => {
    Validator.throwErrorIfHasBlank(direction);
    if (direction !== 'U' && direction !== 'D') throw '[ERROR]';
  },

  commandValidityCheck: (command) => {
    Validator.throwErrorIfHasBlank(command);
    if (command !== 'R' && command !== 'Q') throw '[ERROR]';
  },

  throwErrorIfHasBlank: (string) => {
    if (string.includes(' ')) throw '[ERROR]';
  },
};

module.exports = Validator;
