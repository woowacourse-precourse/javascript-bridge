const MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.\n',
  INPUT_LENGTH: '다리의 길이를 입력해주세요.\n',
  INPUT_UP_DOWN: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  INPUT_CHECK_TRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  FINAL_RESULT: '최종 게임 결과\n',
  SUCCESS_OR_FAIL: '\n게임 성공 여부: ',
  TOTAL_NUMBER: '\n총 시도한 횟수: ',
};

const ERROR_MESSAGE = {
  INVALID_LENGTH_NUMBER: '[ERROR] 다리의 길이는 숫자만 입력 가능합니다.',
  INVALID_LENGTH_RANGE: '[ERROR] 다리의 길이는 3 이상 20 이하 입니다.',
  START_ZERO: '[ERROR] 0으로 시작한 숫자는 입력할 수 없습니다.',
  INVALID_MOVE_VALUE: '[ERROR] U(위)나 D(아래)만 입력 가능합니다.',
  INVALID_TRY_VALUE: '[ERROR] R(재시도)나 Q(종료)만 입력 가능합니다.',
};

const GAME_RESULT = {
  SUCCESS: '성공',
  FAIL: '실패',
};

const BRIDGE = {
  START: '[ ',
  SEPARATE: ' | ',
  END: ' ]',
  NUMBER_UP: 1,
  NUMBER_DOWN: 0,
  STRING_UP: 'U',
  STRING_DOWN: 'D',
};

const REGEXP = {
  CHECK_NUMBER: /^[0-9]*$/,
  CHECK_START_NUMBER: /^0/,
};

module.exports = {
  MESSAGE,
  ERROR_MESSAGE,
  GAME_RESULT,
  BRIDGE,
  REGEXP,
};
