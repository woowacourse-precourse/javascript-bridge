const BRIDGE_REQUIREMENTS = Object.freeze({
  MIN_SIZE: 3,
  MAX_SIZE: 20,
});

const HEADERS = Object.freeze({
  ERROR: '[ERROR]',
});

const MESSAGES = Object.freeze({
  GAME: {
    START: '다리 건너기 게임을 시작합니다.\n',
    REQUIRE_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  },
  ERROR: {
    INVALID_BRIDGE_SIZE: `${HEADERS.ERROR} 다리 길이는 ${BRIDGE_REQUIREMENTS.MIN_SIZE}부터 ${BRIDGE_REQUIREMENTS.MAX_SIZE} 사이의 숫자여야 합니다.`,
    IS_DEMICAL: `${HEADERS.ERROR} 소수가 아닌 정수를 입력해주세요.`
  }
});

exports.MESSAGES = MESSAGES;
exports.BRIDGE_REQUIREMENTS = BRIDGE_REQUIREMENTS;