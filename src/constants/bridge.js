const ERROR = {
  NOT_VALID_SIZE: '3 이상 20 이하의 숫자를 입력해야 합니다.',
  NOT_VALID_MOVING_CHAR: 'U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력해야 합니다.',
  NOT_VALID_COMMAND_CHAR: 'R(재시도)와 Q(종료) 중 하나의 문자를 입력해야 합니다.',
};

const LENGTH = {
  MIN: 3,
  MAX: 20,
};

const EITHER = {
  UP: 'U',
  DOWN: 'D',
};

const MOVE_RESULT = {
  CORRECT: 'O',
  INCORRECT: 'X',
  BLACK: ' ',
};

const CONTAINER = {
  START: '[ ',
  END: ' ]',
  MID: ' | ',
};

const COMMAND = {
  RETRY: 'R',
  QUIT: 'Q',
};

module.exports = {
  ERROR,
  LENGTH,
  EITHER,
  MOVE_RESULT,
  CONTAINER,
  COMMAND,
};
