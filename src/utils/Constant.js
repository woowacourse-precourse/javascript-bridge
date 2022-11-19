const MESSAGE = Object.freeze({
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  GAME_RETRY:
    '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  READ_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  READ_MOVE_LEVEL: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
});

const ERROR_MESSAGE = Object.freeze({
  LEVEL_INPUT: '[ERROR] 이동 값은 U 또는 D를 입력하세요',
  BRIDGE_ISNAN: '숫자를 입력하세요',
  BRIDGE_RANGE: '3이상 20이하의 수를 입력하세요',
});

const INPUT_MESSAGE = Object.freeze({
  UP: 'U',
  DOWN: 'D',
});

const RETRY_MESSAGE = Object.freeze({
  RETRY: 'R',
  QUIT: 'Q',
});

const BRIDGE_ELEMENT = Object.freeze({
  UP: '1',
  DOWN: '0',
});

const OUTPUT_MESSAGE = Object.freeze({
  CORRECT: 'O ',
  INCORRECT: 'X ',
  LINE: '| ',
  EMPTY: '  ',
  START: '[ ',
  END: ']',
  GAME_RESULT: '\n최종 게임 결과',
  GAME_IS_SUCCESS: (result) => `\n게임 성공 여부: ${result ? '성공' : '실패'}`,
  GAME_TRY_CNT: (tryCnt) => `총 시도한 횟수: ${tryCnt}`,
});

const format = (message, ...args) => {
  return args.reduce(
    (formatted, arg, index) => formatted.replace(`{${index}}`, arg),
    message,
  );
};

module.exports = {
  MESSAGE,
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  RETRY_MESSAGE,
  BRIDGE_ELEMENT,
  OUTPUT_MESSAGE,
  format,
};
