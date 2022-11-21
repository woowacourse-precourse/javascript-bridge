const { Console } = require("@woowacourse/mission-utils");
const { GUIDE_MSG } = require("../Messages/constants");

const InputView = {
  readBridgeSize(answer) {
    Console.readLine(GUIDE_MSG.START_MSG, answer);
  },

  readMoving(answer) {
    Console.readLine(GUIDE_MSG.PROGRESS_MSG, answer);
  },

  readGameCommand(answer) {
    Console.readLine(GUIDE_MSG.RETRY_MSG, answer);
  },
};

module.exports = InputView;
