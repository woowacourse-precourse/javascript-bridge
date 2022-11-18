const BRIDGE_REQUIREMENTS = Object.freeze({
  MIN_SIZE: 3,
  MAX_SIZE: 20,
});

const USER_INPUT_CODE = Object.freeze({
  MOVE: {
    UPPER: 'U',
    LOWER: 'D',
  },
  RETRY: {
    AGREE: 'R',
    QUIT: 'Q',
  },
});

const MOVEMENT_LOG_CODE = Object.freeze({
  PASSED: {
    UPPER: 'U',
    LOWER: 'D',
  },
  FAILED: {
    UPPER: 'UF',
    LOWER: 'LF',
  },
});

const OUTPUT_SYMBOLS = Object.freeze({
  PASSED: 'O',
  FAILED: 'X',
  BLANK: ' ',
  PARTITION: '|',
});

const HEADERS = Object.freeze({
  ERROR: '[ERROR]',
});

const MESSAGES = Object.freeze({
  GAME: {
    START: '다리 건너기 게임을 시작합니다.',
    REQUIRE_BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
    REQUIRE_SELECT_DIRECTION: `이동할 칸을 선택해주세요. (위: ${USER_INPUT_CODE.MOVE.UPPER}, 아래: ${USER_INPUT_CODE.MOVE.LOWER})`,
    REQUIRE_RETRY_COMMAND: `게임을 다시 시도할지 여부를 입력해주세요. (재시도:  ${USER_INPUT_CODE.RETRY.AGREE}, 종료: ${USER_INPUT_CODE.RETRY.QUIT})`,
    FINAL_GAME_RESULT: `최종 게임 결과`,
    CLEAR_STATE: `게임 성공 여부:`,
    TOTAL_TRY: `총 시도한 횟수:`,
  },
  ERROR: {
    INVALID_BRIDGE_SIZE: `${HEADERS.ERROR} 다리 길이는 ${BRIDGE_REQUIREMENTS.MIN_SIZE}부터 ${BRIDGE_REQUIREMENTS.MAX_SIZE} 사이의 숫자여야 합니다.`,
    INVALID_DIRECTION: `${HEADERS.ERROR} ${USER_INPUT_CODE.MOVE.UPPER} 혹은 ${USER_INPUT_CODE.MOVE.LOWER}를 입력해주세요.`,
    INVALID_RETRY: `${HEADERS.ERROR} ${USER_INPUT_CODE.RETRY.AGREE} 혹은 ${USER_INPUT_CODE.RETRY.QUIT}를 입력해주세요.`,
    IS_DEMICAL: `${HEADERS.ERROR} 소수가 아닌 정수를 입력해주세요.`,
    IS_NOT_NUMBER: `${HEADERS.ERROR} 숫자를 입력해주세요`
  },
  CLEARED: {
    SUCESSS: '성공',
    FAILED: '실패',
  }
});

exports.MESSAGES = MESSAGES;
exports.BRIDGE_REQUIREMENTS = BRIDGE_REQUIREMENTS;
exports.USER_INPUT_CODE = USER_INPUT_CODE;
exports.MOVEMENT_LOG_CODE = MOVEMENT_LOG_CODE;
exports.OUTPUT_SYMBOLS = OUTPUT_SYMBOLS;