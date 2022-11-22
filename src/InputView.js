const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readBridgeSize(inputBridgeSize) {
    Console.readLine('다리의 길이를 입력해주세요.\n', inputBridgeSize);
  },

  readMoving(inputMoving) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', inputMoving);
  },

  readGameCommand(inputCommand) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', inputCommand);
  },
};

module.exports = InputView;
