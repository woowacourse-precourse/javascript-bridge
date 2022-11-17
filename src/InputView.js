const { Console } = require("@woowacourse/mission-utils");

const InputView = {

  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (userInputBridgeLength) => {
      return userInputBridgeLength;
    });
  },

  readMoving() {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (userInputMoving) => {
      return userInputMoving;
    });
  },

  readRetryOrQuit() {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (userInputRetryOrQuit) => {
      return userInputRetryOrQuit;
    });
  },
};

module.exports = InputView;
