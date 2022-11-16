const { readLine, print } = require('./utils/MissionUtils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    print('\n다리의 길이를 입력해주세요.');
    readLine('', (bridgeSize) => {
      callback(bridgeSize);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    print('\n이동할 칸을 선택해주세요. (위: U, 아래: D)');
    readLine('', (movingInput) => {
      callback(movingInput);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    print('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)');
    readLine('', (commandInput) => {
      callback(commandInput);
    });
  },
};

module.exports = InputView;
