const MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  READ_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  READ_MOVE_LEVEL: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
};

const ERROR_MESSAGE = {
  LEVEL_INPUT: '[ERROR] 이동 값은 U 또는 D를 입력하세요',
};

const INPUT_MESSAGE = {
  UP: 'U',
  DOWN: 'D',
};

const BRIDGE_ELEMENT = {
  UP: '0',
  DOWN: '1',
};

const OUTPUT_MESSAGE = {
  CORRECT: 'O ',
  INCORRECT: 'X ',
  LINE: '| ',
  EMPTY: '  ',
  START: '[ ',
  END: ']',
};

module.exports = {
  MESSAGE,
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  BRIDGE_ELEMENT,
  OUTPUT_MESSAGE,
};
