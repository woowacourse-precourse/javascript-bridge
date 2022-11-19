const MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  INPUT_SIZE: '다리의 길이를 입력해주세요.\n',
  INPUT_SPACE_TO_MOVE: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  INPUT_WANT_RETRY: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const RULE = {
  MIN_SIZE: 3,
  MAX_SIZE: 20,
};

const POSITION = {
  UPPER: 'U',
  LOWER: 'D',
};

const ERROR = {
  PREFIX: '[ERROR]',
  NOT_INTEGER: '정수를 입력해주세요.',
  NOT_IN_RANGE: `${RULE.MIN_SIZE} ~ ${RULE.MAX_SIZE}사이의 자연수를 입력해주세요.`,
  NOT_CROSSIBLE_KEY: `대문자 ${POSITION.UPPER}와 ${POSITION.LOWER} 중 하나를 입력해주세요.`,
};

module.exports = { MESSAGE, RULE, ERROR, POSITION };
