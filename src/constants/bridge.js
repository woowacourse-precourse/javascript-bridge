const ERROR = {
  NOT_VALID_SIZE: '3 이상 20 이하의 숫자를 입력해야 합니다.',
  NOT_VALID_MOVING_CHAR: 'U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력해야 합니다.',
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

module.exports = {
  ERROR,
  EITHER,
  MOVE_RESULT,
  CONTAINER,
};
