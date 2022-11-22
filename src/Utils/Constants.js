const MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  INPUT_SIZE: '다리의 길이를 입력해주세요.\n',
  INPUT_DIRECTION: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  INPUT_COMMAND: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  GAME_RESULT_NOTICE: '최종 게임 결과',
  GAME_RESULT: (result) => `\n게임 성공 여부: ${result}`,
  ATTEMPT_NUMBER: (count) => `총 시도한 횟수: ${count}`,
};

const RULE = {
  MIN_SIZE: 3,
  MAX_SIZE: 20,
};

const DIRECTION = {
  UP: 'U',
  DOWN: 'D',
};

const COMMAND = {
  RETRY: 'R',
  QUIT: 'Q',
};

const MOVE = {
  PASS: 'O',
  FAIL: 'X',
};

const GAME_RESULT = {
  SUCCESS: '성공',
  FAIL: '실패',
  O: '성공',
  X: '실패',
};

const ERROR = {
  PREFIX: '[ERROR]',
  NOT_INTEGER: '정수를 입력해주세요.',
  INCLUDED_BLANK: '입력값에 공백이 포함되어있습니다. 공백을 제거해 주세요',
  NOT_IN_RANGE: `${RULE.MIN_SIZE} ~ ${RULE.MAX_SIZE}사이의 자연수를 입력해주세요.`,
  NOT_POSSIBLE_DIRECTION: `대문자 ${DIRECTION.UP}와 ${DIRECTION.DOWN} 중 하나를 입력해주세요.`,
  NOT_POSSIBLE_COMMAND: `대문자 ${COMMAND.RETRY}와 ${COMMAND.QUIT}중 하나를 입력해주세요`,
};

module.exports = { MESSAGE, RULE, ERROR, DIRECTION, GAME_RESULT, MOVE, COMMAND };
