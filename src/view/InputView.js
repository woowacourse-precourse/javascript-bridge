const MissionUtils = require("@woowacourse/mission-utils");
const bridgeGameController = require('../controller/BridgeGameController');
const MESSAGE = require("../Messages");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 사용자가 생성할 다리 길이를 입력한다.
   * @param {BridgeGame} bridgeGame 현재 실행 중인 다리 건너기 게임
   */
  readBridgeSize(bridgeGame) {
    MissionUtils.Console.readLine(MESSAGE.ENTER_BRIDGE_SIZE, (size) => {
      bridgeGameController.makeBridge(bridgeGame, size);
      this.readMoving(bridgeGame);
    })
  },

  /**
  * 사용자가 이동할 칸을 입력한다.
  * @param {BridgeGame} bridgeGame 현재 실행 중인 다리 건너기 게임
  */
  readMoving(bridgeGame) {
    MissionUtils.Console.readLine(MESSAGE.ENTER_MOVE_TYPE, (moveType) => {
      bridgeGameController.move(bridgeGame, moveType);

      if (bridgeGame.getIsSuccess() === "실패")
        this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @param {BridgeGame} bridgeGame 현재 실행 중인 다리 건너기 게임
   */
  readGameCommand(bridgeGame) {
    MissionUtils.Console.readLine(MESSAGE.ENTER_COMMAND, (command) => {
      bridgeGameController.restartOrEnd(bridgeGame, command);

      if (command === "R")
        InputView.readMoving(bridgeGame);
    });
  },
};

module.exports = InputView;
