const SIZE_RANGE_INCLUSIVE = Object.freeze({ lower: 3, upper: 20 });

const ERROR_PREFIX = '[ERROR]';
const ERROR = Object.freeze({
  bridgeSizeType: `\n${ERROR_PREFIX} 다리 길이는 숫자로 입력하여야 합니다.\n`,
  bridgeSizeRange: `\n${ERROR_PREFIX} 다리 길이는 ${SIZE_RANGE_INCLUSIVE.lower}부터 ${SIZE_RANGE_INCLUSIVE.upper} 사이의 숫자여야 합니다.\n`,
  direction: `\n${ERROR_PREFIX} "U" 또는 "D" 중 한 알파벳을 입력해야 합니다.\n`,
  retry: `\n${ERROR_PREFIX} "R" 또는 "Q" 중 한 알파벳을 입력해야 합니다.\n`,
});

const MARK = Object.freeze({ correct: 'O', incorrect: 'X' });

const SUCCESS = Object.freeze({ true: '성공', false: '실패' });
const MESSAGE = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.\n',
  bridgeSize: '다리의 길이를 입력해주세요.\n',
  direction: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  retry: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  resultTitle: '\n최종 게임 결과',
  result: (successful, numberOfAttempts) => `
  게임 성공 여부: ${SUCCESS[successful]}
  총 시도한 횟수: ${numberOfAttempts}
  `,
});

const RETRY = Object.freeze({ R: true, Q: false });

const VALID_DIRECTION = /^U{1}$|^D{1}$/;

const VALID_RETRY_COMMAND = /^R{1}$|^Q{1}$/;

module.exports = {
  ERROR,
  MARK,
  MESSAGE,
  RETRY,
  SIZE_RANGE_INCLUSIVE,
  VALID_DIRECTION,
  VALID_RETRY_COMMAND,
};
