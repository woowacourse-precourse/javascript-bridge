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
  readBridgeSize(verifyBridgeSize) {
    Console.readLine(INPUT_MESSAGE.start, (size) => {
      try {
        const isError = isCorrectBridgeSize(Number(size));
        verifyBridgeSize(size, isError);
      } catch (e) {
        Console.print(e);
        verifyBridgeSize(size, true);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(verifyMove) {
    Console.readLine(INPUT_MESSAGE.move, (move) => {
      try {
        const isError = isCorrectCharactor(move) || isCorrectMoveCommand(move);
        verifyMove(move, isError);
      } catch (e) {
        Console.print(e);
        verifyMove(move, true);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(verifyCommand) {
    Console.readLine(INPUT_MESSAGE.retry, (command) => {
      try {
        const isError = isCorrectCharactor(command) || isCorrectOptionCommand(command);
        verifyCommand(command, isError);
      } catch (e) {
        Console.print(e);
        verifyCommand(command, true);
      }
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
