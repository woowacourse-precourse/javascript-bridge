const BRIDGE = {
  START: '[ ',
  END: ' ]',
  SPLIT: ' | ',
  ROOM: ' ',
  CROSS: 'O',
  UN_CROSS: 'X',
  MIN_SIZE: 3,
  MAX_SIZE: 20,
};

const MAP = {
  UP_SIDE_STR: 'U',
  UP_SIDE_NUM: 1,
  DOWN_SIDE_STR: 'D',
  DOWN_SIDE_NUM: 0,
};

const COMMAND = {
  RETRY: 'R',
  QUIT: 'Q',
};

const RESULT = {
  SUCCESS: '성공',
  FAIL: '실패',
};

const MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.',
  INPUT_SIZE: '다리의 길이를 입력해주세요.',
  INPUT_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  INPUT_COMMNAD: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  GAME_RESULT: '최종 게임 결과',
  SUCCESS_OR_FAIL: (result) => `게임 성공 여부: ${result}`,
  ATTEMPTS_NUM: (num) => `총 시도한 횟수: ${num}`,
};

const ERROR_PREFIX = '[ERROR]';

const ERROR_MESSAGE = {
  INPUT_NUM: '입력값은 숫자여야 합니다.',
  INPUT_STR: '입력값은 문자여야 합니다.',
  INPUT_BLANK: '입력값에 공백이 포함되서는 안됩니다.',
  BRIDGE_SIZE: '다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVING: '이동 가능한 칸은 위(U) 또는 아래(D) 입니다.',
  COMMNAD: '재시도(R) 또는 종료(Q)를 입력해야 합니다.',
};

module.exports = {
  BRIDGE,
  MAP,
  RESULT,
  MESSAGE,
  COMMAND,
  ERROR_PREFIX,
  ERROR_MESSAGE,
};
