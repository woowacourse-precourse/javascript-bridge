const MissionUtils = require("@woowacourse/mission-utils");
const Bridge = require("./Bridge");
const BridgeGame = require('./BridgeGame');
const { MESSAGE } = require("./Messages");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    MissionUtils.Console.readLine(MESSAGE.ENTER_BRIDGE_SIZE, (size) => {
      bridgeGame.setBridge(new Bridge(size));
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    MissionUtils.Console.readLine(MESSAGE.ENTER_BRIDGE_SIZE, (moveType) => {

    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() { },
};

module.exports = InputView;
