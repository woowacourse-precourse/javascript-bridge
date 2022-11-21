const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants');

const InputView = {
  readBridgeSize(settingBridge) {
    Console.readLine(MESSAGE.INPUT_BRIDGE_SIZE, (size) => {
      try {
        settingBridge(size);
      } catch(e) {
        Console.print(e);
        this.readBridgeSize(settingBridge);
      }
    });
  },

  readMoving(movingSteps) {
    Console.readLine(MESSAGE.INPUT_MOVING, (move) => {
      try {
        movingSteps(move);
      } catch(e) {
        Console.print(e);
        this.readMoving(movingSteps);
      }
    })
  },

  readGameCommand(endingBridge) {
    Console.readLine(MESSAGE.INPUT_ENDING, (command) => {
      try {
        endingBridge(command);
      } catch(e) {
        Console.print(e);
        this.readGameCommand(endingBridge);
      }
    })
  },
};

module.exports = {
  InputView,
};
