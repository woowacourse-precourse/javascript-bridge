const { Console } = require('@woowacourse/mission-utils');

const input = async (commandMessage) => {
  return new Promise((resolve, _) => {
    Console.readLine(commandMessage, (answer) => {
      resolve(answer);
    });
  });
}

const handleError = (errorMessage, nextStep) => {
  Console.print(`[ERROR] ${errorMessage}\n`);
  nextStep();
}

module.exports = {
  input,
  handleError,
}