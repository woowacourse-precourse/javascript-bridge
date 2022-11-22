const SETTING = require('./gameSetting');

const ERROR = {
  MOVING: '[ERROR] 이동은 위, 아래로만 할 수 있습니다.',
  BRIDGE: `[ERROR] 다리는 ${SETTING.MOVING_UP}와 ${SETTING.MOVING_DOWN}로 이루어져 있어야 합니다.`,
  BRIDGE_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVE_COUNT: '[ERROR] 이동한 횟수는 숫자여야 합니다.',
  MOVE_COUNT_OVER_BRIDGE_SIZE: '[ERROR] 이동한 횟수는 다리의 길이를 초과할 수 없습니다.',
  INPUT_BRIDGE_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자를 입력해야 합니다.',
  INPUT_MOVING: `[ERROR] 위로 이동은 ${SETTING.MOVING_UP}, 아래로 이동은 ${SETTING.MOVING_DOWN}를 입력해야 합니다.`,
  INPUT_GAME_COMMAND: `[ERROR] 게임 재시작은 ${SETTING.GAME_RESTART}, 종료는 ${SETTING.GAME_QUIT}를 입력해야 합니다.`,
};

module.exports = Object.freeze(ERROR);
