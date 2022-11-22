const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = Object.freeze({
  INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  INPUT_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  INPUT_GAME_COMMAND:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.INPUT_BRIDGE_SIZE, callback);
  },

  readMoving(callback) {
    Console.readLine(MESSAGE.INPUT_MOVING, callback);
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE.INPUT_GAME_COMMAND, callback);
  },
};

module.exports = InputView;
