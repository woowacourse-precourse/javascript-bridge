const MissionUtils = require("@woowacourse/mission-utils");
const Validator = require('./Utils/Validator');
const { MESSAGES } = require('./constants');

const InputView = {
  readBridgeSize() {
    MissionUtils.Console.readLine(MESSAGES.GAME.REQUIRE_BRIDGE_SIZE, (input) => {
      const bridgeSize = Number(input);
      this.bridgeSizeCheck(bridgeSize);
    });
  },

  bridgeSizeCheck(size) {    
    try {
      Validator.bridgeSizeCheck(size);
    } catch(err) {
      MissionUtils.Console.print(err);
      this.readBridgeSize();
    }
  },

  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
