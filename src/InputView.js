const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./Constants/Message');
const {
  isCorrectBridgeSize,
  isCorrectCharactor,
  isCorrectMoveCommand,
  isCorrectOptionCommand,
} = require('./Utils/Validation');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(sendBridgeToModel) {
    Console.readLine(INPUT_MESSAGE.start, (size) => {
      const isError = isCorrectBridgeSize(Number(size));
      sendBridgeToModel(size, isError);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(sendMoveToModel) {
    Console.readLine(INPUT_MESSAGE.move, (move) => {
      const isError = isCorrectCharactor(move) || isCorrectMoveCommand(move);
      sendMoveToModel(move, isError);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(checkGameOption) {
    Console.readLine(INPUT_MESSAGE.retry, (command) => {
      const isError = isCorrectCharactor(command) || isCorrectOptionCommand(command);
      checkGameOption(command, isError);
    });
  },

  /**
   * 콘솔 입력창을 닫는다.
   */
  exit() {
    return Console.close();
  },
};

module.exports = InputView;
