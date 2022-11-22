const { Console } = require('@woowacourse/mission-utils');
const { INPUT } = require('../src/const/Text');

const InputView = {
  readBridgeSize(inputBridgeSize) {
    Console.readLine(INPUT.bridgeSize, inputBridgeSize);
  },

  readMoving(inputMoving) {
    Console.readLine(INPUT.moving, inputMoving);
  },

  readGameCommand(inputCommand) {
    Console.readLine(INPUT.retry, inputCommand);
  },
};

module.exports = InputView;
