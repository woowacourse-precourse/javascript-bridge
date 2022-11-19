const { Console } = require("@woowacourse/mission-utils");
const { MANAGER } = require("../utils/constants");

const InputView = {
  readBridgeSize(input) {
    Console.readLine(`\n${MANAGER.ASK_BRIDGE_SIZE}\n`, input);
  },

  readMoving(input) {
    Console.readLine(`\n${MANAGER.ASK_MOVE}\n`, input);
  },

  readGameCommand(input) {
    Console.readLine(`\n${MANAGER.ASK_RETRY}\n`, input);
  },
};

module.exports = InputView;
