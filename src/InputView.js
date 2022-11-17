const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readBridgeSize(handleBridgeSize) {
    Console.readLine('다리의 길이를 입력해주세요.\n', (input) => {
      const size = Number(input);
      handleBridgeSize(size);
    });
  },

  readMoving() {},

  readGameCommand() {},
};

module.exports = InputView;
