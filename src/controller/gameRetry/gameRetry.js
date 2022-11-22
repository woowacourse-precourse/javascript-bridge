const { closeConsole } = require('../../view/InputErrorView');
const { printLoseResult, printMap } = require('../../OutputView');

const End = (curgameobj, curindex) => {
  printMap(curgameobj, curindex);
  closeConsole();
  return false;
};

const Retry = () => true;

const ifRetryorEnd = (gameobj, gameindex) => {
  const RetryorEnd = gameobj.retry();
  if (RetryorEnd === 'Q') {
    return End(gameobj, gameindex);
  }
  return Retry();
};

module.exports = ifRetryorEnd;
