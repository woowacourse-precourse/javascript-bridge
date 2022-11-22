const ERROR_PREFIX = '[ERROR]';

const ERROR = {
  NOT_A_NUMBER: `${ERROR_PREFIX} 입력값은 숫자여야 합니다.`,
  OUT_OF_RANGE: `${ERROR_PREFIX} 다리 길이는 3~20 사이의 숫자여야 합니다.`,
  WRONG_MOVE_INPUT: `${ERROR_PREFIX} 이동할 칸은 U 또는 D로 입력해야 합니다.`,
  WRONG_COMMAND: `${ERROR_PREFIX} 재시작/종료는 R 도는 Q로 입력해야 합니다.`,
};

const COMMAND = {
  UP: 'U',
  DOWN: 'D',
  RETRY: 'R',
  QUIT: 'Q',
};

module.exports = { ERROR, COMMAND };
