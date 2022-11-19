const BridgeGame = require ('./BridgeGame');
const { MESSAGE } = require('./constants/messages');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
 const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(MESSAGE.READ_USER_INPUT_COMMAND, (input) => {
      this.handleBridgeSizeException(input);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  handleBridgeSizeException(size) {
    try {
      Validate.userInputSize(size);
      const bridgeGame = new BridgeGame(size);
      this.readMoving(bridgeGame);
    } catch (error) {
      MissionUtils.Console.print(MESSAGE.ERROR.USER_INPUT_BRIDGE_SIZE_INVALID);
      this.readBridgeSize();
    }
  },
};

module.exports = InputView;