const { Console } = require('@woowacourse/mission-utils');

const handleInputError = (message, retry, callback) => {
  Console.print(`[ERROR] ${message}`);
  retry(callback);
};

module.exports = { handleInputError };
