const MissionUtils = require('@woowacourse/mission-utils');
const { READ_BRIDGE_SIZE, READ_MOVING, READ_GAME_COMMAND } = require('../utils/constant');
const { isBridgeSizeValid, isUserMovingInputValid, isGameCommandValid } = require('../utils/validation');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(gameManager) {
    MissionUtils.Console.readLine(READ_BRIDGE_SIZE, (answer) => {
      isBridgeSizeValid(answer);
      gameManager.makeBridge(answer);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(gameManager, level) {
    MissionUtils.Console.readLine(READ_MOVING, (answer) => {
      isUserMovingInputValid(answer);
      gameManager.getBridgeGame().move(gameManager, level, answer);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(gameManager, bridgeGame) {
    MissionUtils.Console.readLine(READ_GAME_COMMAND, (answer) => {
      isGameCommandValid(answer);
      // resolve(answer);
      bridgeGame.commandProcess(gameManager, answer);
    });
  },
};

module.exports = InputView;
