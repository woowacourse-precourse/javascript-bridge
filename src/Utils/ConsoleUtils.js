const { Console } = require('@woowacourse/mission-utils');

const playerInput = (message, callback) => {
  Console.readLine(message, callback);
};

const close = () => {
  Console.close();
};

const printMessage = (message) => {
  Console.print(message);
};

module.exports = {
  playerInput,
  close,
  printMessage,
};
