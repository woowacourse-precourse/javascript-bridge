const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  INPUT_MESSAGE: {
    bridgeSize: '다리의 길이를 입력해주세요.',
    moving: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
    gameCommand: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  },

  readBridgeSize(handleBridgeSize) {
    Console.print(InputView.INPUT_MESSAGE.bridgeSize);
    Console.readLine('', (input) => {
      const size = Number(input);
      handleBridgeSize(size);
    });
  },

  readMoving(handleMoving) {
    Console.print(InputView.INPUT_MESSAGE.moving);
    Console.readLine('', (input) => {
      handleMoving(input);
    });
  },

  readGameCommand(handleGameCommand) {
    Console.print(InputView.INPUT_MESSAGE.gameCommand);
    Console.readLine('', (input) => {
      handleGameCommand(input);
    });
  },
};

module.exports = InputView;
