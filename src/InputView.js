const { Console } = require('@woowacourse/mission-utils');
const { REQUEST_MSG } = require('./constants/message.js');
const BridgeGame = require('./BridgeGame.js');

const bridgeGame = new BridgeGame();

const InputView = {
  requestBridgeSize() {
    Console.readLine(REQUEST_MSG.bridgeSize, InputView.readBridgeSize);
  },

  readBridgeSize(size) {
    try {
      bridgeGame.build(size);
    } catch ({ message }) {
      Console.print(message);
      InputView.requestBridgeSize();
    }

    InputView.requestMoving();
  },

  requestMoving() {
    Console.readLine(REQUEST_MSG.movingDirection, InputView.readMoving);
  },

  readMoving(movingDirection) {},

  readGameCommand() {},
};

module.exports = InputView;
