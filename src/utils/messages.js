const { BRIDGE_SIZE } = require('./constants');

const MSG = {
  ERROR: {
    BRIDGE_TYPE: '[ERROR] 다리 길이는 숫자만 입력할 수 있습니다.\n',
    BRIDGE_RANGE: `[ERROR] 다리 길이는 ${BRIDGE_SIZE.MIN}이상 ${BRIDGE_SIZE.MAX}이하의 숫자입니다.\n`,
    DIRECTION_TYPE: '[ERROR] U 또는 D만 입력할 수 있습니다.',
    COMMAND_TYPE: '[ERROR] R 또는 Q만 입력할 수 있습니다.',
  },
  GAME: {
    START: '다리 건너기 게임을 시작합니다.',
    READ_BRIDGE: '다리의 길이를 입력해주세요.\n',
    READ_DIRECTION: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    READ_COMMAND:
      '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  },
};

module.exports = { MSG };
