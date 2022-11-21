const Constant = Object.freeze({
  COMMON: Object.freeze({
    newLine: '\n',
    blank: ' ',
  }),
  BRIDGE_MSG: Object.freeze({
    leftEdge: '[',
    rightEdge: ']',
    divider: '|',
    possible: 'O',
    impossible: 'X',
    upward: 'U',
    downward: 'D',
  }),
  GAME_MSG: Object.freeze({
    start: '다리 건너기 게임을 시작합니다.',
    enterLength: '다리의 길이를 입력해주세요.',
    enterToMove: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
    enterRetry:
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
    result: '최종 게임 결과',
    successOrNot: '게임 성공 여부: ',
    totalTryCount: '총 시도한 횟수: ',
  }),
  GAME_RESULT: Object.freeze({
    success: '성공',
    fail: '실패',
    retry: 'R',
    quit: 'Q',
  }),
  ERROR_MSG: Object.freeze({
    prefix: '[ERROR] ',
    isOutOfRange: '다리 길이는 3부터 20 사이의 숫자여야 합니다.',
    isNotANumber: '숫자를 입력해야 합니다.',
    isNotUpOrDown: '이동은 U 또는 D로 입력해야 합니다.',
    isNotRetryOrQuit: '재시작/종료는 R/Q를 입력해야 합니다.',
  }),
});

module.exports = Constant;
