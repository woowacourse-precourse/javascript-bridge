const INPUT_QUERY = {
  BRIDGE_SIZE: '다리의 길이를 입력해주세요\n',
  MOVING_SPACE: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  GAME_COMMAND: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n'
};

const ERROR = {
  NOT_NUMBER: '[ERROR] 숫자를 입력해야 합니다.',
  NOT_THREE_TO_TWENTY: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  NOT_U_OR_D: '[ERROR] 이동할 칸은 U나 D만 입력할 수 있습니다.',
  NOT_UPPERCASE: '[ERROR] 대문자로 입력해주세요.',
  NOT_R_OR_Q: '[ERROR] R이나 Q만 입력할 수 있습니다.'
};

const GAME_OUTCOME = {
  FINAL_SUCCESS: '최종 성공',
  SUCCESS: '성공',
  FAIL: '실패',
};

const LETTER_SIGN = {
  RIGHT: 'O',
  WRONG: 'X',
  BLANK: ' ',
  CONNECTING_LETTER: ' | ',
};

const DIRECTION = {
  UP: 'U',
  DOWN: 'D'
};

const GAME_COMMAND = {
  RESTART: 'R',
  QUIT: 'Q'
};

const OUTPUT = {
  FINAL_GAME_RESULT: '\n최종 게임 결과',
  GAME_SUCCESS_OR_NOT: (outcome) => `게임 성공 여부: ${outcome}`,
  TOTAL_ATTEMPT_NUMBER: (attemptNumber) => `총 시도한 횟수: ${attemptNumber}`
};

module.exports = { INPUT_QUERY, ERROR, GAME_OUTCOME, LETTER_SIGN, DIRECTION, GAME_COMMAND, OUTPUT };
