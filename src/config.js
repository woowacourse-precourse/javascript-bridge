const MOVE = {
  UP: 'U',
  DOWN: 'D',
};

const MAP = {
  START: '[',
  DELIMITER: '|',
  END: ']',
  SUCCESS: ' O ',
  FAIL: ' X ',
  EMPTY: '  ',
};

const PHRASE = {
  START: '다리 건너기 게임을 시작합니다.',
  BRIDGE_LEN: '다리의 길이를 입력해주세요.',
  SELECT: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  RESTART: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  RESULT: '최종 게임 결과',
  SUCCESS: '게임 성공 여부: 성공',
  FAIL: '게임 성공 여부: 실패',
  TOTAL_TRY: '총 시도한 횟수: ',
};

const ERRORS = {
  INVALID_BRIDGE_TYPE: '[ERROR] 다리 길이는 숫자여야 합니다.',
  INVALID_BRIDGE_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',

  INVALID_MOVE_TYPE: '[ERROR] 이동 타입은 U/D이어야 합니다.',
  INVALID_RESTART_TYPE: '[ERROR] 재시작 입력은 R/Q이어야 합니다.',
};

module.exports = {
  MOVE,
  MAP,
  PHRASE,
  ERRORS,
};
