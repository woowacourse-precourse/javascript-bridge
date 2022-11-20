const MESSAGE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  SELECT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  GUESS: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  ASK_CONTINUE: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
});

const ERROR = Object.freeze({
  NOT_A_NUMBER: '[ERROR] 다리의 길이는 숫자로 입력해야 합니다.',
  INVALID_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVING: '[ERROR] U 또는 D만 입력할 수 있습니다. (위: U, 아래: D)',
  CONTINUE: '[ERROR] R 또는 Q만 입력할 수 있습니다. (재시도: R, 종료: Q)',
});

module.exports = { MESSAGE, ERROR };
