const { Console } = require("@woowacourse/mission-utils");

const InputView = {

  readBridgeSize(question, callback) {
    Console.readLine(question, callback);
  },

  readMoving(question, callback) {
    Console.readLine(question, callback);
  },

  readGameCommand(question, callback) {
    Console.readLine(question, callback);
  },
};

module.exports = InputView;
