const MESSAGE = Object.freeze({
  GAME_START: '다리 건너기 게임을 시작합니다.',
  ASK_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.\n',
  ASK_SELECT_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  ASK_RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const COMMAND = Object.freeze({
  MOVING_UP: 'U',
  MOVING_DOWN: 'D',
  RETRY: 'R',
  QUIT: 'Q',
});

const REGEX = Object.freeze({
  IS_NUMBER: /^[1-9]\d*$/,
});

const BRIDGE = Object.freeze({
  MIN_SIZE: 3,
  MAX_SIZE: 20,
  SUCCESS_SIGN: ' O ',
  EMPTY_SIGN: '   ',
  FAIL_SIGN: ' X ',
});

const MOVE_RESULT = Object.freeze({
  OK: 0,
  CLEAR: 1,
  FAIL: 2,
});

module.exports = Object.freeze({
  MESSAGE,
  COMMAND,
  REGEX,
  BRIDGE,
  MOVE_RESULT,
});
