const MAP_CHARACTERS = {
  START: '[ ',
  MIDDLE: ' | ',
  END: ' ]',
  WHITE_SPACE: ' ',
  USER_MOVE_RESULT: {
    true: 'O',
    false: 'X',
  },
  COMMAND: {
    U: 0,
    D: 1,
  },
};

const MESSAGES = {
  OUTPUT: {
    WELCOME: '다리 건너기 게임을 시작합니다.',
  },
  INPUT: {
    BRIDGE_SIZE: '\n다리의 길이를 입력해주세요.\n',
    MOVING: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    RETRY: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  },
};

const VALID_INPUT = {
  move: ['U', 'D'],
  retry: ['R', 'Q'],
};

module.exports = { MAP_CHARACTERS, MESSAGES, VALID_INPUT };
