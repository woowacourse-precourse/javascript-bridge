const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readBridgeSize() {
    return new Promise((resolve) => {
      Console.readLine('\n다리의 길이를 입력해주세요.\n', (size) => {
        resolve(size);
      });
    });
  },

  readMoving() {
    return new Promise((resolve) => {
      Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (move) => {
        resolve(move);
      });
    });
  },

  readGameCommand() {
    return new Promise((resolve) => {
      Console.readLine('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (command) => {
        resolve(command);
      });
    });
  },
};

module.exports = InputView;
