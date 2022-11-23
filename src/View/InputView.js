const { Console } = require("@woowacourse/mission-utils");
const { MANAGER } = require("../utils/gameMessage");

const InputView = {
  readBridgeSize(input) {
    Console.readLine(`${MANAGER.ASK_BRIDGE_SIZE}`, input);
  },

  readMoving(input) {
    Console.readLine(`${MANAGER.ASK_MOVE}`, input);
  },

  readGameCommand(input) {
    Console.readLine(`${MANAGER.ASK_RETRY}`, input);
  },
};

module.exports = InputView;
