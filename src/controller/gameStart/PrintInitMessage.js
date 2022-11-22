const { printGameStart, printBridgeInput } = require('../../OutputView');

const printinitMessage = () => {
  printGameStart();
  printBridgeInput();
};

Object.freeze(printinitMessage);

module.exports = printinitMessage;
