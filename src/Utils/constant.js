const MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.',
  INPUT_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.',
  INPUT_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  INPUT_RETRY_OR_QUIT:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  SUCCESS: '성공',
  FAIL: '실패',
  RESULT: '최종 게임 결과',
  isSucces(isSucces) {
    return `게임 성공 여부: ${isSucces}`;
  },
  printCount(count) {
    return `총 시도한 횟수: ${count}`;
  },
};

const BRIDGE = {
  MIN_LENGTH: 3,
  MAX_LENGTH: 20,
};

const ERROR = {
  BRIDGE_LENGTH: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVE: '[ERROR] 이동하는 키는 대문자 U와 대문자 D중 하나만 입력 가능합니다.',
  RETRY_OR_QUIT: '[ERROR] R 또는 Q 만 입력 가능합니다.',
};

const BUTTON = {
  UP: 'U',
  DOWN: 'D',
  RETRY: 'R',
  QUIT: 'Q',
};

module.exports = {
  MESSAGE,
  BRIDGE,
  ERROR,
  BUTTON,
};
