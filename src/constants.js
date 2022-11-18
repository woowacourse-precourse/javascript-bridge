const INPUT_MESSAGE = {
  BRIDGE_LENGTH: '다리의 길이를 입력해주세요.\n',
  MOVING_DIRECTION: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
};

const PRINT_MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
};

const ERROR = '[ERROR]';

const ERROR_MESSAGE = {};

const MOVE = {
  DIRECTION_UP: 'U',
  DIRECTION_DOWN: 'D',
  DIRECTION_UP_NUM: 1,
  DIRECTION_DOWN_NUM: 0,
};

const MOVE_RESULT = {
  START: '[',
  END: ']',
  SECTION: '|',
  EMPTY: '   ',
  AVAILABLE: ' O ',
  UNAVAILABLE: ' X ',
};

module.exports = {
  INPUT_MESSAGE,
  PRINT_MESSAGE,
  ERROR_MESSAGE,
  MOVE,
  MOVE_RESULT,
};
