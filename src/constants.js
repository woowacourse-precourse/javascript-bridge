const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const BRIDGE_REQUIREMENTS = Object.freeze({
  MIN_SIZE: 3,
  MAX_SIZE: 20,
  UPPER_CODE: 'U',
  LOWER_CODE: 'D',
});

const HEADERS = Object.freeze({
  ERROR: '[ERROR]',
});

const MESSAGES = Object.freeze({
  GAME: {
    START: '다리 건너기 게임을 시작합니다.\n',
    REQUIRE_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
    REQUIRE_SELECT_DIRECTION: `이동할 칸을 선택해주세요. (위: ${BRIDGE_REQUIREMENTS.UPPER_CODE}, 아래: ${BRIDGE_REQUIREMENTS.LOWER_CODE})\n`,
  },
  ERROR: {
    INVALID_BRIDGE_SIZE: `${HEADERS.ERROR} 다리 길이는 ${BRIDGE_REQUIREMENTS.MIN_SIZE}부터 ${BRIDGE_REQUIREMENTS.MAX_SIZE} 사이의 숫자여야 합니다.`,
    INVALID_DIRECTION: `${HEADERS.ERROR} ${BRIDGE_REQUIREMENTS.UPPER_CODE} 혹은 ${BRIDGE_REQUIREMENTS.LOWER_CODE}를 입력해주세요.`,
    IS_DEMICAL: `${HEADERS.ERROR} 소수가 아닌 정수를 입력해주세요.`
  },
});

exports.MESSAGES = MESSAGES;
exports.BRIDGE_REQUIREMENTS = BRIDGE_REQUIREMENTS;