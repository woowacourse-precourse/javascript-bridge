const MESSAGE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  SELECT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  GUESS: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  ASK_CONTINUE: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  BLANK: '',
});

const ERROR = Object.freeze({
  NOT_A_NUMBER: '[ERROR] 다리의 길이는 숫자로 입력해야 합니다.',
  INVALID_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVING: '[ERROR] U 또는 D만 입력할 수 있습니다. (위: U, 아래: D)',
  CONTINUE: '[ERROR] R 또는 Q만 입력할 수 있습니다. (재시도: R, 종료: Q)',
});

const OPTION = Object.freeze({
  UP: 'U',
  DOWN: 'D',
  RETRY: 'R',
  QUIT: 'Q',
});

const RANDOM_NUMBER = Object.freeze({
  ZERO: 0,
  ONE: 1,
});

const BRIDGE_VALUE = Object.freeze({
  DEFAULT_GAME_PROGRESS: [],
  DEFAULT_ROUND: 0,
  DEFAULT_ALIVE_VALUE: true,
  DEFAULT_COUNT: 0,
  RESULT_WIN: '성공',
  RESULT_DEFEAT: '실패',
  COUNT_UNIT: 1,
  ROUND_UNIT: 1,
  BLUEPRINT_DEFAULT: false,
  RANGE_MIN: 3,
  RANGE_MAX: 20,
});

const PROGRESS_MAP = Object.freeze({
  SEPARATOR: '|',
  BLANK: '   ',
  ALIVE: ' O ',
  DIE: ' X ',
  PARSE_STRING: (row) => `[${row.join(PROGRESS_MAP.SEPARATOR)}]`,
});

const REGEX = Object({
  NUMBER: /^\d+$/g,
});

const RESULT = Object.freeze({
  TITLE: '최종 게임 결과',
  GAME_RESULT: (gameResult) => `게임 성공 여부: ${gameResult}`,
  PLAY_COUNT: (playCount) => `총 시도한 횟수: ${playCount}`,
});

module.exports = {
  MESSAGE,
  ERROR,
  OPTION,
  BRIDGE_VALUE,
  RANDOM_NUMBER,
  REGEX,
  PROGRESS_MAP,
  RESULT,
};
