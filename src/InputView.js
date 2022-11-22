const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const MESSAGE = require('./consts/Input');

const InputView = {
  readBridgeSize() {
    let bridgeSize;
    Console.readLine(MESSAGE.READ_BRIDGE_SIZE, (input) => {
      bridgeSize = Number(input);
      Console.close();
    });

    return bridgeSize;
  },

  readMoving() {
    let moving;
    Console.readLine(MESSAGE.READ_MOVING, (input) => {
      moving = input;
      Console.close();
    });

    return moving;
  },
  readGameCommand() {
    let command;
    Console.readLine(MESSAGE.READ_GAME_COMMAND, (input) => {
      command = input;
      Console.close();
    });

    return command;
  },
};

module.exports = InputView;
