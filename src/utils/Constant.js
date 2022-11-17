const MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  READ_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  READ_MOVE_LEVEL: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
};

const ERROR_MESSAGE = {
  LEVEL_INPUT: '[ERROR] 이동 값은 U 또는 D를 입력하세요',
  BRIDGE_ISNAN: '[ERROR] 숫자를 입력하세요',
  BRIDGE_RANGE: '[ERROR] 3이상 20이하의 수를 입력하세요',
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
  GAME_RESULT: '\n최종 게임 결과',
  GAME_IS_SUCCESS: (result) => `\n게임 성공 여부: ${result}`,
  GAME_TRY_CNT: (tryCnt) => `총 시도한 횟수: ${tryCnt}`,
};

module.exports = {
  MESSAGE,
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  BRIDGE_ELEMENT,
  OUTPUT_MESSAGE,
};
