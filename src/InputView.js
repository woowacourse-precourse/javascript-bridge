const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./Constant');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
// InputView 에서만 MissionUtils의 Console.readLine() 을 이용해 사용자의 입력을 받을 수 있다.
const InputView = {
  readBridgeSize() {
    return new Promise(resolve => {
      Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, size => {
        resolve(size);
      });
    });
  },

  readMoving() {
    return new Promise(resolve => {
      Console.readLine(INPUT_MESSAGE.READ_MOVE, move => {
        resolve(move);
      });
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
