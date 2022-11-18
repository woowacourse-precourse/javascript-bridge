const { Console } = require('@woowacourse/mission-utils');
const { REQUEST_MSG } = require('./constants/message.js');
const { printMsg } = require('./OutputView.js');
const BridgeGame = require('./BridgeGame.js');

const bridgeGame = new BridgeGame();

const InputView = {
  requestBridgeSize() {
    Console.readLine(REQUEST_MSG.bridgeSize, InputView.readBridgeSize);
  },

  readBridgeSize(size) {
    try {
      bridgeGame.build(size);

      InputView.requestMoving();
    } catch ({ message }) {
      printMsg(message);
      InputView.requestBridgeSize();
    }
  },

  requestMoving() {
    Console.readLine(REQUEST_MSG.movingDirection, InputView.readMoving);
  },

  readMoving(movingDirection) {},

  readGameCommand() {},
};

module.exports = InputView;
