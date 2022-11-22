const ERROR_MESSAGE = {
  ONLY_NUM: '[ERROR] 숫자만 입력할 수 있습니다.',
  NOT_INT_RANGE: '[ERROR] 3부터 20 사이의 숫자여야 합니다.',
  NOT_DECIMAL_POINT: '[ERROR] 소수점은 입력할 수 없습니다.',
  NOT_SMALL_LETTER: '[ERROR] 대문자로 입력해야 합니다.',
  ONLY_MOVE_KEY: '[ERROR] U 또는 D를 입력하여 이동할 수 있습니다.',
  ONLY_RETRY_KEY:
    '[ERROR] R 또는 Q를 입력하여 재시도/종료 여부를 결정할 수 있습니다.',
};

const USER_MESSAGE = {
  INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  INPUT_MOVE_POSITION: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  INPUT_RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
};

const GAME_MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.',
  RESULT: '최종 게임 결과',
  WINNING: '게임 성공 여부:',
  TRIES: '총 시도한 횟수:',
};

module.exports = { ERROR_MESSAGE, USER_MESSAGE, GAME_MESSAGE };
