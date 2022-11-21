const { COMMAND } = require('./Constants');

const isRetry = (command) => {
  return command === COMMAND.RETRY;
};

const isQuit = (command) => {
  return command === COMMAND.QUIT;
};

module.exports = { isRetry, isQuit };
