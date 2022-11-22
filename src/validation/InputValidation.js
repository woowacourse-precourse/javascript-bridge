/**
 * 사용자의 입력에 대해 유효성 검사를 진행한다.
 */

const { BRIDGE_SIZE_ERROR, MOVEMENT_ERROR, GAME_COMMAND_ERROR } = require('../constants/error.constants');
const { USER_MOVEMENT, GAME_COMMAND } = require('../constants/game.constants');

const InputValidation = {
  /**
   * 플레이어가 입력한 다리의 길이가 정수인지 검사하는 메서드
   * @param {number} bridgeSize 플레이어가 입력한 다리의 길이
   */
  isBridgeSizeInteger(bridgeSize) {
    if (!Number.isInteger(bridgeSize)) throw new Error(BRIDGE_SIZE_ERROR.NOT_INTEGER);
  },

  /**
   * 플레이어가 입력한 다리의 길이가 3 이상 20 이하의 숫자인지 검사하는 메서드
   * @param {number} bridgeSize 플레이어가 입력한 다리의 길이
   */
  isBridgeSizeInRange(bridgeSize) {
    if (bridgeSize < 3 || bridgeSize > 20) throw new Error(BRIDGE_SIZE_ERROR.OUT_OF_RANGE);
  },

  /**
   * 플레이어가 입력한 이동 명령이 유효한지 검사하는 메서드
   * @param {string} movement 플레이어가 입력한 입력 명령
   */
  isMovementAvailable(movement) {
    if (movement !== USER_MOVEMENT.UP && movement !== USER_MOVEMENT.DOWN) throw new Error(MOVEMENT_ERROR.NOT_AVAILABLE);
  },

  /**
   * 플레이어가 입력한 게임 재시작 및 종료 명령이 유효한지 검사하는 메서드
   * @param {string} restartOrQuit 플레이어가 입력한 게임 재시작 및 종료 명령
   */
  isGameCommandAvailable(restartOrQuit) {
    if (restartOrQuit !== GAME_COMMAND.RESTART && restartOrQuit !== GAME_COMMAND.QUIT)
      throw new Error(GAME_COMMAND_ERROR.NOT_AVAILABLE);
  },
};

module.exports = InputValidation;
