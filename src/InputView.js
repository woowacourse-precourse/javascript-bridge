const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./Constants');
const { generate } = require('./BridgeRandomNumberGenerator');
const { makeBridge } = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const Validation = require('./Validation');

const InputView = {
  readBridgeSize() {
    Console.readLine(GAME_MESSAGE.LENGTH, (answer) => {
      Validation.bridgeSize(answer);

      const size = Number(answer);
      const bridge = makeBridge(size, generate);
      const game = new BridgeGame(bridge);

      Console.print('');
      InputView.readMoving(game);
    });
  },
  readMoving() {},
  readGameCommand() {},
};

module.exports = InputView;
