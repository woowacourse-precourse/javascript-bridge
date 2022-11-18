const { Console } = require('@woowacourse/mission-utils');

const Validator = {
  sizeValidityCheck: (size) => {
    const regex = /^\d+$/;
    try {
      Validator.throwErrorIfHasBlank(size);
      if (!regex.test(size)) throw new Error('[ERROR]');
      if (size < 3 || size > 20) throw new Error('[ERROR]');
    } catch (error) {
      Console.print(error);
    }
  },

  throwErrorIfHasBlank: (string) => {
    if (string.includes(' ')) throw new Error('[ERROR]');
  },
};

module.exports = Validator;
