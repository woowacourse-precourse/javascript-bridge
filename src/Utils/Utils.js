const { Console } = require('@woowacourse/mission-utils');
const { COMMAND } = require('./Constants');

const playerInput = (message, callback) => {
  Console.readLine(message, callback);
};

const close = () => {
  Console.close();
};

const printMessage = (message) => {
  Console.print(message);
};

const isRetry = (command) => {
  return command === COMMAND.RETRY;
};

const isQuit = (command) => {
  return command === COMMAND.QUIT;
};

module.exports = {
  playerInput,
  close,
  printMessage,
  isRetry,
  isQuit,
};
