const MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  INPUT_SIZE: '다리의 길이를 입력해주세요.\n',
};

const RULE = {
  MIN_SIZE: 3,
  MAX_SIZE: 20,
};

const ERROR = {
  PREFIX: '[ERROR]',
  NOT_INTEGER: '정수를 입력해주세요.',
  NOT_IN_RANGE: `${RULE.MIN_SIZE} ~ ${RULE.MAX_SIZE}사이의 자연수를 입력해주세요.`,
};

module.exports = { MESSAGE, RULE, ERROR };
