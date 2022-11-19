const MESSAGE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  SELECT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  GUESS: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
});

const ERROR = Object.freeze({
  NOT_A_NUMBER: '[ERROR] 다리의 길이는 숫자로 입력해야 합니다.',
  INVALID_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
});

module.exports = { MESSAGE, ERROR };
