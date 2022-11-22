const INPUT_MESSAGE = {
  BRIDGE_LENGTH: '다리의 길이를 입력해주세요.\n',
  MOVING_DIRECTION: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RETRY_OR_QUIT:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const PRINT_MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  FINAL_GAME_RESULT: '최종 게임 결과',
  GAME_SUCCESS_OR_NOT: '\n게임 성공 여부: ',
  TOTAL_GAME_COUNT: '총 시도한 횟수: ',
  SUCCESS: '성공',
  FAIL: '실패',
};

const ERROR = '[ERROR]';

const ERROR_MESSAGE = {
  BRIDGE_LENGTH_NUMBER: `${ERROR} 다리의 길이는 숫자여야 합니다.`,
  BRIDGE_LENGTH_RANGE: `${ERROR} 다리의 길이는 3 ~ 20 사이여야 합니다.`,
  MOVE_COMMAND: `${ERROR} 이동할 칸의 입력 값은 U 또는 D 여야 합니다.`,
  RETRY_OR_QUIT_COMMAND: `${ERROR} 재시작&종료 입력 값은 R 또는 Q 이여야 합니다.`,
};

const MOVE = {
  DIRECTION_UP: 'U',
  DIRECTION_DOWN: 'D',
  DIRECTION_UP_NUM: 1,
  DIRECTION_DOWN_NUM: 0,
};

const MOVE_RESULT = {
  START: '[',
  END: ']',
  SECTION: '|',
  EMPTY: '   ',
  AVAILABLE: ' O ',
  UNAVAILABLE: ' X ',
};

const RETRY_OR_QUIT = {
  RETRY: 'R',
  QUIT: 'Q',
};

module.exports = {
  INPUT_MESSAGE,
  PRINT_MESSAGE,
  ERROR_MESSAGE,
  MOVE,
  MOVE_RESULT,
  RETRY_OR_QUIT,
};
