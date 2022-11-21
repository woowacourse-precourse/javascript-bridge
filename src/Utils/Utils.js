const { Console } = require('@woowacourse/mission-utils');
const { IS_RETRY } = require('./Constants');

const playerInput = (message, callback) => {
  Console.readLine(message, callback);
};

const close = () => {
  Console.close();
};

const printMessage = (message) => {
  Console.print(message);
};

const isRetry = (input) => {
  return input === IS_RETRY.YES;
};

const isQuit = (input) => {
  return input === IS_RETRY.NO;
};

module.exports = {
  playerInput,
  close,
  printMessage,
  isRetry,
  isQuit,
};
