const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');

const InputView = {
  INPUT_MESSAGE: {
    bridgeSize: '\n다리의 길이를 입력해주세요.\n',
    moving: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    gameCommand: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  },

  readBridgeSize(handleBridgeSize) {
    Console.readLine(InputView.INPUT_MESSAGE.bridgeSize, (input) => {
      try {
        if (isNaN(input)) throw new Error('숫자를 입력해 주세요.');
      } catch (e) {
        OutputView.printError(e.message);
        InputView.readBridgeSize(handleBridgeSize);
      }

      const size = Number(input);
      handleBridgeSize(size);
    });
  },

  readMoving(handleMoving) {
    Console.readLine(InputView.INPUT_MESSAGE.moving, (input) => {
      handleMoving(input);
    });
  },

  readGameCommand(handleGameCommand) {
    Console.readLine(InputView.INPUT_MESSAGE.gameCommand, (input) => {
      handleGameCommand(input);
    });
  },
};

module.exports = InputView;
