const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./Constants');
const Validation = require('./Validation');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

const InputView = {
  readBridgeSize() {
    Console.readLine(GAME_MESSAGE.LENGTH, (answer) => {
      Validation.bridgeSize(answer);

      const size = Number(answer);
      const bridge = makeBridge(size, generate);
    });
  },
  readMoving() {},
  readGameCommand() {},
};

module.exports = InputView;
