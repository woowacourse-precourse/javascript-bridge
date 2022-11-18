const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const Validator = require('./Validator');

const InputView = {
  INPUT_MESSAGE: {
    bridgeSize: '\n다리의 길이를 입력해주세요.\n',
    moving: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    gameCommand: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  },

  readBridgeSize(handleBridgeSize) {
    Console.readLine(InputView.INPUT_MESSAGE.bridgeSize, (input) => {
      try {
        Validator.checkBridgeSize(input);
        handleBridgeSize(Number(input));
      } catch (e) {
        OutputView.printError(e.message);
        InputView.readBridgeSize(handleBridgeSize);
      }
    });
  },

  readMoving(handleMoving) {
    Console.readLine(InputView.INPUT_MESSAGE.moving, (input) => {
      try {
        Validator.checkMoving(input);
        handleMoving(input);
      } catch (e) {
        OutputView.printError(e.message);
        InputView.readMoving(handleMoving);
      }
    });
  },

  readGameCommand(handleGameCommand) {
    Console.readLine(InputView.INPUT_MESSAGE.gameCommand, (input) => {
      try {
        Validator.checkGameCommand(input);
        handleGameCommand(input);
      } catch (e) {
        OutputView.printError(e.message);
        InputView.readGameCommand(handleGameCommand);
      }
    });
  },
};

module.exports = InputView;
