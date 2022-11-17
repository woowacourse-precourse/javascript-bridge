const { Console } = require("@woowacourse/mission-utils");

const InputView = {

  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.", (userInputBridgeLength) => {
      return userInputBridgeLength;
    });
  },

  readMoving() { },


  readGameCommand() { },
};

module.exports = InputView;
