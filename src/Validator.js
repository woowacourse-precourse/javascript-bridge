const { Console } = require('@woowacourse/mission-utils');

const Validator = {
  throwErrorIfHasBlank: (string) => {
    if (string.includes(' ')) throw new Error('[ERROR]');
  },
};

module.exports = Validator;
