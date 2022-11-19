const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./Constants/Message');
const { checkBridgeSize, checkCorrectCharactor, checkCorrectCommand } = require('./Utils/Validation');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(sendBridge) {
    Console.readLine(INPUT_MESSAGE.start, (size) => {
      // this.sizeValidation(size);
      sendBridge(size);
    });
  },

  sizeValidation(size) {
    checkBridgeSize(size);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(sendMoving) {
    Console.readLine(INPUT_MESSAGE.move, (move) => {
      // this.moveValidation(move, INPUT_TYPE.move);
      sendMoving(move);
    });
  },

  moveValidation(move, type) {
    checkCorrectCharactor(move);
    checkCorrectCommand(move, type);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(checkGameOption) {
    Console.readLine(INPUT_MESSAGE.retry, (command) => {
      // this.retryValidation(command, INPUT_TYPE.retry);
      checkGameOption(command);
    });
  },

  retryValidation(command, type) {
    checkCorrectCharactor(command);
    checkCorrectCommand(command, type);
  },
};

module.exports = InputView;
