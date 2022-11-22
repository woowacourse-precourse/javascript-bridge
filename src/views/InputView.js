const { Console } = require('@woowacourse/mission-utils');

const INPUT_MESSAGE = Object.freeze({
  requestBridgeSize: '다리의 길이를 입력해 주세요.\n',
  requestMovingDirection: '이동할 칸을 선택해 주세요. (위: U, 아래: D)\n',
  requestRetryOption:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const InputView = {
  readBridgeSize(onInput) {
    Console.readLine(INPUT_MESSAGE.requestBridgeSize, onInput);
  },
  readMoving(onInput) {
    Console.readLine(INPUT_MESSAGE.requestMovingDirection, onInput);
  },
  readGameCommand(onInput) {
    Console.readLine(INPUT_MESSAGE.requestRetryOption, onInput);
  },
};

module.exports = InputView;
