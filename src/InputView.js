const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readBridgeSize(handleBridgeSize) {
    Console.readLine('다리의 길이를 입력해주세요.\n', (input) => {
      const size = Number(input);
      handleBridgeSize(size);
    });
  },

  readMoving(handleMoving) {
    Console.readLine('이동할 칸을 선택해주세요.\n', (input) => {
      handleMoving(input);
    });
  },

  readGameCommand(handleGameCommand) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요.\n', (input) => {
      handleGameCommand(input);
    });
  },
};

module.exports = InputView;
