const START_MESSAGE = Object.freeze({
  START_TITLE: '다리 건너기 게임을 시작합니다.\n',
});

const INPUT_MESSAGE = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVE: '\n이동할 칸을 선택해 주세요. (위: U, 아래:D)\n',
  COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  END_TITLE: '최종 게임 결과',
  SUCCESS_OR_FAILURE: '게임 성공 여부: ',
  TOTAL_ATTEMPT: '총 시도한 횟수: ',
});

const ERROR_MESSAGE = Object.freeze({
  IS_EMPTY: '[ERROR] 값을 입력해야 합니다.',

  BRIDGE_SIZE_NOT_NUMBER: '[ERROR] 숫자만 입력해야 합니다.',
  BRIDGE_SIZE_NOT_RIGHT_RANGE: '[ERROR] 3이상 20이하 숫자를 입력해야 합니다.',

  MOVE_NOT_RIGHT_LETTER: '[ERROR] U or D 를 입력해야 합니다.',

  COMMAND_NOT_RIGHT_LETTER: '[ERROR] Q or R 를 입력해야 합니다.',
});

const GAME_UTILS = Object.freeze({
  MOVE_CORRECT: 'O',
  MOVE_WRONG: 'X',
  MOVE_UNCHECK: ' ',

  COMMAND_UPBRIDGE: 'U',
  COMMAND_DOWNBRIDGE: 'D',
  COMMAND_RESTART: 'R',
  COMMAND_QUIT: 'Q',

  GAME_RESULT_SUCCESS: '성공',
  GAME_RESULT_FAILURE: '실패',
});

module.exports = { START_MESSAGE, INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE, GAME_UTILS };
