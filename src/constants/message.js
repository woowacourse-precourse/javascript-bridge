const {
  BRIDGE_SIZE_MIN_RANGE,
  BRIDGE_SIZE_MAX_RANGE,
  UPSIDE_SYMBOL,
  DOWNSIDE_SYMBOL,
  QUIT_COMMAND,
  RESTART_COMMAND,
} = require('./condition.js');

const GAME_MSG_START = '다리 건너기 게임을 시작합니다.';

const REQUEST_MSG = Object.freeze({
  bridgeSize: '\n다리의 길이를 입력해주세요.\n',
  direction: `\n이동할 칸을 선택해주세요. (위: ${UPSIDE_SYMBOL}, 아래: ${DOWNSIDE_SYMBOL})\n`,
  retryOrQuit: `\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${RESTART_COMMAND}, 종료: ${QUIT_COMMAND})\n`,
});

const ERROR_MSG = Object.freeze({
  emptyInput: '[ERROR] 입력값이 비었습니다. 값을 입력해주세요',
  invalidInputType: '[ERROR] 숫자가 아닌 문자를 입력했습니다. 숫자만 입력해 주세요',
  isStartedZero: '[ERROR] 입력값이 0으로 시작합니다. 올바른 숫자를 입력해 주세요',
  invalidInputRange: `[ERROR] 유효하지 않은 입력 범위입니다. ${BRIDGE_SIZE_MIN_RANGE} ~ ${BRIDGE_SIZE_MAX_RANGE} 사이의 값을 입력해주세요.`,
  invalidDirection: `[ERROR] 유효하지 않은 이동방향입니다. (위: ${UPSIDE_SYMBOL}, 아래: ${DOWNSIDE_SYMBOL}) 를 입력해주세요`,
  inValidCommand: `[ERROR] 유효하지 않은 입력입니다. (재시도: ${RESTART_COMMAND}, 종료: ${QUIT_COMMAND}) 를 입력해주세요`,
});

module.exports = {
  GAME_MSG_START,
  REQUEST_MSG,
  ERROR_MSG,
};
