const RULES = Object.freeze({
  MIN_BRIDGE_NUMBER: 3,
  MAX_BRIDGE_NUMBER: 20,
  UP: 'U',
  DOWN: 'D',
  PASS: ' O ',
  NO_PASS: ' X ',
  SPACE: '   ',
  SEPERATION: '|',
});

const ERROR_MESSAGE = Object.freeze({
  NON_NUMERIC_VALUE: '[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.',
  INVALID_MOVE_INPUT: '[ERROR] U 또는 D 문자만 입력이 가능합니다.',
  INVALID_RETRY_INPIT: '[ERROR] R 또는 Q 문자만 입력이 가능합니다.',
  INVALID_RANGE: (min, max) => `[ERROR] ${min}부터 ${max}사이의 숫자만 입력할 수 있습니다.`,
});

const PRINT_MESSAGE = Object.freeze({
  WELLCOME: '다리 건너기 게임을 시작합니다.\n',
  MAP: (bridge) => `[${bridge}]`,
  RESULT_INFORMATION: '최종 게임 결과',
  SUCCESS: '성공',
  FAIL: '실패',
  GAME_RESULT: (gameResult) => `게임 성공 여부: ${gameResult} `,
  TRY_COUNT: (retryCount) => `총 시도한 횟수: ${retryCount} `,
});

const INFORMATION_MESSAGE = Object.freeze({
  READ_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  READ_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  READ_GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

module.exports = { RULES, ERROR_MESSAGE, PRINT_MESSAGE, INFORMATION_MESSAGE };
