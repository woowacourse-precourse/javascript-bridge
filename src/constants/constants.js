const BRIDGE = {
  min: 3,
  max: 20,
};

const RESULT = {
  success: '성공',
  fail: '실패',
};

const HOTKEY = {
  retry: 'R',
  quit: 'Q',
  up: 'U',
  down: 'D',
};

const RESULT_MAP = {
  correct: 'O',
  incorrect: 'X',
  trap: ' ',
  first: '[ ',
  last: ' ]',
  separator: ' | ',
};

const MESSAGE = {
  readBridgeSize: '다리의 길이를 입력해주세요.\n',
  readMoving: `이동할 칸을 선택해주세요. (위: ${HOTKEY.up}, 아래: ${HOTKEY.down})\n`,
  readGameCommand: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${HOTKEY.retry}, 종료: ${HOTKEY.quit})\n`,
  printInitial: '다리 건너기 게임을 시작합니다.\n',
  printResultTitle: '최종 게임 결과',
  printResult: '게임 성공 여부: ',
  printRetry: '총 시도한 횟수: ',
};

const ERROR = {
  notNumber: '[ERROR] 다리 길이는 숫자만 입력 가능합니다.\n',
  notRangeOfBridgeLength: `[ERROR] 다리 길이는 ${BRIDGE.min}부터 ${BRIDGE.max} 사이의 숫자여야 합니다.\n`,
  notValidDirectionInput: `[ERROR] 이동할 칸은 위: ${HOTKEY.up}, 아래: ${HOTKEY.down} 만 입력 가능합니다.\n`,
  notValidRetryInput: `[ERROR] 재시도: ${HOTKEY.retry}, 종료: ${HOTKEY.quit} 만 입력 가능합니다.\n`,
};

module.exports = { BRIDGE, RESULT, HOTKEY, RESULT_MAP, MESSAGE, ERROR };
