const { Console } = require('@woowacourse/mission-utils');

const input = async (commandMessage) => {
  return new Promise((resolve, _) => {
    Console.readLine(commandMessage, (answer) => {
      resolve(answer);
    });
  });
}

const throwError = (errorMessage) => {
  Console.print(errorMessage);
  Console.close();
  throw new Error("[ERROR]");
}

module.exports = {
  input,
  throwError,
}