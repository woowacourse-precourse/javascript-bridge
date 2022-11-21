const ERROR = Object.freeze({
  BRIDGE_SIZE_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  BRIDGE_SIZE_TYPE: '[ERROR] 다리 길이는 숫자만 입력 가능 합니다.',
  BRIDGE_MOVING: '[ERROR] 이동은 U 또는 D만 입력 가능합니다.',
  RETRY_END: '[ERROR] 재시도 여부는 R 또는 Q만 입력 가능합니다.',
});

const GAME = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  END_RESULT: '최종 게임 결과',
  RETRY: 'R',
  QUIT: 'Q',
  RESULT: '게임 성공 여부: ',
  TRY_COUNT: '총 시도한 횟수: ',
  SUCCESS: '성공',
  FAIL: '실패',
});

const INPUT = Object.freeze({
  ASK_BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  ASK_MOVEMENT: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  ASK_RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
});

const BRIDGE = Object.freeze({
  SIZE_MIN: 3,
  SIZE_MAX: 20,
});

const MOVEMENT = Object.freeze({
  UP: 'U',
  DOWN: 'D',
  SUCCESS: 'O',
  FAIL: 'X',
});

module.exports = {
  ERROR,
  GAME,
  INPUT,
  BRIDGE,
  MOVEMENT,
};
