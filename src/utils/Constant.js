const INPUT_MESSAGE = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요. \n >',
  MOVING: '이동할 칸을 선택해주세요 (위: U, 아래: D)\n >',
  RESTART: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n >'
});

const OUTPUT_MESSAGE = Object.freeze({
  END: '최종 게임 결과',
  RESULT: '게임 성공 여부: ',
  TRY: '총 시도한 횟수: ',
  SUCCESS: '성공',
  FAIL: '실패'
});

const ERROR_MESSAGE = Object.freeze({
  NOT_VALID: '[ERROR] 유효한 값이 아닙니다. 재입력해주세요.',
  FAILED_START: '[ERROR] 입력 값이 유효하지 않아 게임이 실행되지 않았습니다.'
})

const BRIDGE_ELEMENT = Object.freeze({
  OPEN: '[',
  CLOSE:']',
  MIDDLE: '|',
  COLLECT: ' O ',
  WRONG: ' X ',
  EMPTY: '   '
});

const GAME_COMMAND = Object.freeze({
  UP: 'U',
  DOWN: 'D',
  RESTART: 'R',
  QUIT: 'Q'
});

const VALID_FLAG = Object.freeze({
  ERROR: -1,
  DO: 0,
  PASS: 1
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE,
  BRIDGE_ELEMENT,
  GAME_COMMAND,
  VALID_FLAG
};