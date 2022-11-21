const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("./Constants");
const InputView = {
  readBridgeSize() {
    Console.readLine(GAME_MESSAGES.ASK_TO_BRIDGE_LENGTH, (size) => {
      Console.print(size);
    });
  },

  readMoving() {},

  readGameCommand() {},
};

module.exports = InputView;
