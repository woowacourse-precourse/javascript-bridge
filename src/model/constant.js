const BRIDGESIZE_ERROR = {
  NUMBER: '[ERROR] 다리 길이는 숫자여야 합니다.',
  RANGE: '[ERROR] 다리 길이는 3 ~ 20 사이의 숫자여야 합니다.',
};

const BRIDGESIZE_INFO = {
  MIN: 3,
  MAX: 20,
};

const MOVEMENT_ERROR = {
  ALPHABET: '[ERROR] 움직임은 영어여야 합니다.',
  UPPERCASE: '[ERROR] 움직임은 대문자여야 합니다.',
  CORRECT: '[ERROR] 아래로 건너는 경우는 U, 위로 건너는 경우는 D로 입력해주세요.',
};

module.exports = { BRIDGESIZE_ERROR, BRIDGESIZE_INFO, MOVEMENT_ERROR };
