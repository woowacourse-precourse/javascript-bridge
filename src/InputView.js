const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readBridgeSize(callBack) {
    Console.readLine('다리의 길이를 입력해주세요.\n', callBack);
  },


  readMoving(callBack) {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', callBack);
  },


  readGameCommand(callBack) {
    Console.readLine('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', callBack);
  },
};

module.exports = InputView;
