const MissionUtils = require("@woowacourse/mission-utils");
const { BRIDGE_NUMBER_INPUT, PLAYER_MOVE_INPUT, RESTART_OR_QUIT_INPUT} = require("../utils/constant")
const {
  bridgeLengthValidate,
  userMoveValidate,
  userRetryValidate
} = require('../validateFunction')
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(createBridge) {
    MissionUtils.Console.readLine(BRIDGE_NUMBER_INPUT, (bridgeSize) => {
      if(bridgeLengthValidate(bridgeSize)) return this.readBridgeSize(createBridge);
      createBridge(bridgeSize)
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(playerMoving) {
    MissionUtils.Console.readLine(PLAYER_MOVE_INPUT, (playerMove) => {
      if(userMoveValidate(playerMove)) return this.readMoving(playerMoving)
      playerMoving(playerMove)
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(gameRetry) {
    MissionUtils.Console.readLine(RESTART_OR_QUIT_INPUT, (answer) => {
      if(userRetryValidate(answer)) return this.readGameCommand(gameRetry)
      gameRetry(answer)
    })
  },

};

module.exports = InputView;