const GAME_NUMBER = {
  startIndex: 0,
  one: 1,
  min: 3,
  max: 20,
};

const GAME_STRING = {
  retry: 'R',
  quit: 'Q',
  upBridge: 'U',
  downBridge: 'D',
  blank: '',
  pipeString: '|',
  success: '성공',
  fail: '실패',
  successMark: ' O ',
  failMark: ' X ',
  nothingMark: '   ',
};

const GAME_MESSAGE = {
  start: '다리 건너기 게임을 시작합니다.\n',
  size: '다리의 길이를 입력해주세요.\n',
  move: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  retry: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const ERROR_INPUT = {
  sizeMessage: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  moveMessage: '[ERROR] U와 D중 하나의 문자를 입력해주세요.',
  retryMessage: '[ERROR] R과 Q중 하나의 문자를 입력해주세요.',
};

const BRIDGE = {
  up: 0,
  down: 1,
};

const GAME_RESULT_MESSAGE = (moveState, isSuccess, retryCount) => `
최종 게임 결과
[${moveState[BRIDGE.up].join(GAME_STRING.pipeString)}]
[${moveState[BRIDGE.down].join(GAME_STRING.pipeString)}]

게임 성공 여부: ${isSuccess}
총 시도한 횟수: ${retryCount}`;

module.exports = {
  GAME_NUMBER,
  GAME_STRING,
  GAME_MESSAGE,
  ERROR_INPUT,
  BRIDGE,
  GAME_RESULT_MESSAGE,
};
