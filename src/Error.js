const {
  BRIDGE_SIZE_RANGE_START,
  BRIDGE_SIZE_RANGE_END,
  MOVE_COMMAND_UP,
  MOVE_COMMAND_DOWN,
  GAME_COMMAND_RESTART,
  GAME_COMMAND_QUIT,
} = require('./Constant');

/**
 * BridgeSize
 */
const ERROR_INPUT_NUMBER_LINE = '[ERROR] 숫자를 입력하시길 바랍니다.';
const ERROR_INPUT_RANGE_LINE = `[ERROR] 다리 길이는 ${BRIDGE_SIZE_RANGE_START}이상 ${BRIDGE_SIZE_RANGE_END}이하 숫자를 입력하시길 바랍니다.`;

/**
 * Moving
 */
const ERROR_INPUT_U_D_LINE = `[ERROR] 이동은 ${MOVE_COMMAND_UP}(위 칸)와 ${MOVE_COMMAND_DOWN}(아래 칸) 중 하나의 문자만 입력하시길 바랍니다.`;

/**
 * GameCommand
 */

const ERROR_INPUT_R_Q_LINE = `[ERROR] 게임 재시작/종료 여부는 ${GAME_COMMAND_RESTART}(재시작)과 ${GAME_COMMAND_QUIT}(종료) 중 하나의 문자만 입력하시길 바랍니다.`;

module.exports = {
  ERROR_INPUT_NUMBER_LINE,
  ERROR_INPUT_RANGE_LINE,
  ERROR_INPUT_U_D_LINE,
  ERROR_INPUT_R_Q_LINE,
};
