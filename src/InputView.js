const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./Constants/Message');
const { INPUT_TYPE } = require('./Constants/InputValues');
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
      checkBridgeSize(size);
      sendBridge(size);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(sendMoving) {
    Console.readLine(INPUT_MESSAGE.move, (move) => {
      checkCorrectCharactor(move);
      checkCorrectCommand(move, INPUT_TYPE.move);
      sendMoving(move);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(checkGameOption) {
    Console.readLine(INPUT_MESSAGE.retry, (command) => {
      checkCorrectCharactor(command);
      checkCorrectCommand(command, INPUT_TYPE.retry);
      checkGameOption(command);
    });
  },

  exit() {
    return Console.close();
  },
};

module.exports = InputView;
