const { Console } = require('@woowacourse/mission-utils');

const errorCheckFor = (inputFn, beforePlayFn) => {
  try {
    inputFn();
  } catch (error) {
    Console.print(error.message);
    beforePlayFn();
  }
};

module.exports = {
  errorCheckFor,
};
