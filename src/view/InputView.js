const { inputUserValue } = require("../utils/index");
const { GAME_MESSAGE } = require("../constants/index");
const BridgeGameController = require("../BridgeGameController");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {BridgeGameController} bridgeGameController 다리 게임 컨트롤러 객체
   */
  readBridgeSize(bridgeGameController) {
    inputUserValue(GAME_MESSAGE.INPUT_BRIDGE_LENGTH, (length) => {
      bridgeGameController.proceedCreateBridgeStage(length);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {BridgeGameController} bridgeGameController 다리 게임 컨트롤러 객체
   */
  readMoving(bridgeGameController) {
    inputUserValue(GAME_MESSAGE.INPUT_MOVE, (move) => {
      bridgeGameController.proceedMovingState(move);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @param {BridgeGameController} bridgeGameController 다리 게임 컨트롤러 객체
   * @param {string[]} up 위쪽 다리 성공실패 목록
   * @param {string[]} down 아래쪽 다리 성공실패 목록
   * @param {boolean} successStatus 다리를 건널수 있는지 여부
   */
  readGameCommand(bridgeGameController, up, down, successStatus) {
    inputUserValue(GAME_MESSAGE.RESTART, (command) => {
      bridgeGameController.proceedGameCommandState(
        command,
        up,
        down,
        successStatus
      );
    });
  },
};

module.exports = InputView;
