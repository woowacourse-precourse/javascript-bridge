const UI_COMPONENT = {
  SUCCESS: '성공',
  FAIL: '실패',
  CORRECT: 'O',
  INCORRECT: 'X',
}

const GAME_STATUS = {
  END: 'END',
  NEXT: 'NEXT',
  FAIL: 'FAIL',
}

const OPERATION_KEY = {
  UP: 'U',
  DOWN: 'D',
  RETRY: 'R',
  QUIT: 'Q',
};

const LIMIT = {
  MIN_VALUE: 3,
  MAX_VALUE: 20,
};

const MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.\n',
  REQUEST_SIZE: '다리의 길이를 입력해주세요.\n',

  REQUEST_DIRECTION: `\n이동할 칸을 선택해주세요. (위: ${OPERATION_KEY.UP}, 아래: ${OPERATION_KEY.DOWN})\n`,

  REQUEST_GAME_COMMAND: `\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${OPERATION_KEY.RETRY}, 종료: ${OPERATION_KEY.QUIT})\n`,

  MAP_TEMPLATE: (mark) =>
    `[ ${mark.upside.join(' | ')} ]
[ ${mark.downside.join(' | ')} ]`,

  RESULT: (mark, isSuccess, tryCount) => `
최종 게임 결과
${MESSAGE.MAP_TEMPLATE(mark)}

게임 성공 여부: ${isSuccess}
총 시도한 횟수: ${tryCount}
`,
};

const ERROR_MESSAGE = {
  SIZE_RANGE: `[ERROR] 사이즈는 ${LIMIT.MIN_VALUE} ~ ${LIMIT.MAX_VALUE} 사이입니다.`,
  SIZE_INTEGER: '[ERROR] 사이즈는 정수여야 합니다.',
  OPERATION_MOVE: `[ERROR] 이동은 ${OPERATION_KEY.UP}, ${OPERATION_KEY.DOWN}만 가능합니다.`,
  OPERATION_GAME_COMMAND: `[ERROR] 입력은 ${OPERATION_KEY.RETRY}, ${OPERATION_KEY.QUIT}만 가능합니다.`,
};

module.exports = { UI_COMPONENT, GAME_STATUS, OPERATION_KEY, LIMIT, MESSAGE, ERROR_MESSAGE };
