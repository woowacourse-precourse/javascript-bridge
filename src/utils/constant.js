const UTIL = Object.freeze({
  GO: 'O',
  STOP: 'X',
  UP: 'U',
  DOWN: 'D',
  RETRY: 'R',
  QUIT: 'Q',
  SUCCESS: '성공',
  FAIL: '실패',
  FIRST: 1,
  INIT: 0,
  MIN: 3,
  MAX: 20,
});

const INPUT = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  CHOOSE_BLOCK: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RESTART: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const OUTPUT = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.\n',
  RESULT_MENT: '최종 게임 결과',
  NEWLINE: '',
  IS_SUCCESS_GAME: (result) => `게임 성공 여부: ${result}`,
  TOTAL_TRIES: (tries) => `총 시도한 횟수: ${tries}`,
  UPPER: (upper) => `[${upper}]`,
  LOWER: (lower) => `[${lower}]\n`,
});

const BRIDGE = Object.freeze({
  FIRST_BLOCK: (state) => ` ${state} `,
  AFTER_FIRST_BLOCK: (state) => `| ${state} `,
  NOT_CHOOSE_FIRST_BLOCK: '   ',
  NOT_CHOOSE_AFTER_FIRST_BLOCK: '|   ',
});

const ERROR = Object.freeze({
  SIZE_NUMBER: '[ERROR] 다리 사이즈는 숫자로만 입력할 수 있습니다.',
  SIZE_INTEGER: '[ERROR] 다리 사이즈는 정수로만 입력할 수 있습니다.',
  SIZE_RANGE: '[ERROR] 다리 사이즈는 3과 20 사이의 숫자만 입력할 수 있습니다.',
  MOVE: '[ERROR] 이동은 U 또는 D 키만 사용할 수 있습니다.',
  REGAME: '[ERROR] R 키로 재시작 또는 Q 키로 게임 종료만 할 수 있습니다.',
});

module.exports = {
  UTIL,
  INPUT,
  OUTPUT,
  BRIDGE,
  ERROR,
};
