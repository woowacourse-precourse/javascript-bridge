const MOVING_COMMAND = ['D', 'U'];

const MOVING = {
  D: 0,
  U: 1,
};

const MOVE_RESULT = {
  MOVEABLE: 0,
  END: 1,
  FAIL: 2,
};

const MARKING = {
  RIGHT: 'O',
  WRONG: 'X',
  EMPTY: ' ',
};

const INIT_TRY_COUNT = 1;

const GAME_COMMAND = {
  RETRY: 'R',
  QUIT: 'Q',
};

const ERROR_MESSAGE = {
  wrong_input: '[ERROR] 잘못된 입력입니다. ',
  wrong_bridge_size_input:
    '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  wrong_move_command:
    '[ERROR] "U"또는 "D"를 입력하여야 합니다. (위: U, 아래: D)',
  wrong_game_command:
    '[ERROR] "R"또는 "Q"를 입력하여야 합니다. (재시도: R, 종료: Q)',
  input_isNaN: '[ERROR] 입력값이 NaN입니다.',
};

Object.freeze(MOVING_COMMAND);
Object.freeze(MOVE_RESULT);
Object.freeze(GAME_COMMAND);
Object.freeze(ERROR_MESSAGE);
Object.freeze(MOVING);
Object.freeze(INIT_TRY_COUNT);
Object.freeze(MARKING);

module.exports = {
  MOVING_COMMAND,
  MOVING,
  MOVE_RESULT,
  MARKING,
  INIT_TRY_COUNT,
  GAME_COMMAND,
  ERROR_MESSAGE,
};
