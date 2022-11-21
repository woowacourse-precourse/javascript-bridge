const { Console } = require('@woowacourse/mission-utils');

const handleInputError = (errorMessage, retry, next) => {
  Console.print(`[ERROR] ${errorMessage}\n`);
  retry(next);
}

module.exports = {
  handleInputError,
}