const { readLine, print } = require('./utils/MissionUtils');
const { INPUT_TEXT } = require('./constant/contant');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    print(INPUT_TEXT.BRIDGE_SIZE);
    readLine('', (bridgeSize) => {
      callback(bridgeSize);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    print(INPUT_TEXT.BRIDGE_MOVING);
    readLine('', (movingInput) => {
      callback(movingInput);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    print(INPUT_TEXT.BRIDGE_COMMAND);
    readLine('', (commandInput) => {
      callback(commandInput);
    });
  },
};

module.exports = InputView;
