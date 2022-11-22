const { printGameStart, printBridgeInput } = require('../../view/OutputView');

const printinitMessage = () => {
  printGameStart();
  printBridgeInput();
};

Object.freeze(printinitMessage);

module.exports = printinitMessage;
