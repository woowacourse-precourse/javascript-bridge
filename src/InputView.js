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
      bridgeGame.buildBridge(size);
    } catch ({ message }) {
      Console.print(message);
      InputView.requestBridgeSize();
    }
  },

  readMoving() {},

  readGameCommand() {},
};

module.exports = InputView;
