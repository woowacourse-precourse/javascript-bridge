const { Console } = require("@woowacourse/mission-utils");
const { INTRO_MESSAGE } = require("./libs/Const");

const InputView = {
  readBridgeSize(callBack) {
    Console.readLine(INTRO_MESSAGE.requestBridgeSize, callBack);
  },

  readMoving(callBack) {
    Console.readLine(INTRO_MESSAGE.requestDirection, callBack);
  },

  readGameCommand(callBack) {
    Console.readLine(INTRO_MESSAGE.requestCommandOption, callBack);
  },
};

module.exports = InputView;
