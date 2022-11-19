const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");

const InputView = {

  readBridgeSize(callback) {
    Console.readLine('다리의 길이를 입력해주세요.\n', callback);
  },


  readMoving(callback) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', callback);
  },

  readRetryOrQuit(callback) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', callback);
  },
};

module.exports = InputView;
