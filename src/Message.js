const MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.\n',
  SUCCESS: '성공',
  FAIL: '실패',
  RESULT: '최종 게임 결과',
  WIN: '게임 성공 여부:',
  COUNT: '총 시도한 횟수:',
  LENGTH: '다리의 길이를 입력해주세요.\n',
  MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const RESULT = {
  CORRECT: 'O',
  INCORRECT: 'X',
  SPACE: ' ',
  LINE: ' | ',
  BRIDGE_START: '[ ',
  BRIDGE_END: ' ]',
};

const COMMAND = {
  RETRY: 'R',
  QUIT: 'Q',
};

const ERROR = {
  MOVING: '[ERROR] 방향 입력은 U, D로 입력해야 합니다.',
  COMMAND: '[ERROR] 재시작 여부는 R, Q로 입력해야 합니다.',
  SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
};

const BRIDGE = {
  MIN_SIZE: 3,
  MAX_SIZE: 20,
};

const MOVING = {
  UP: 'U',
  DOWN: 'D',
};

module.exports = { MESSAGE, RESULT, COMMAND, ERROR, BRIDGE, MOVING };