const GAME_MESSAGE = {
  LENGTH: '다리의 길이를 입력해주세요.',
};

const ERROR_MESSAGE = {
  INTEGER: '[ERROR] 다리 길이는 양의 정수여야 합니다.',
  DOMAIN: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVING: `[ERROR] 이동할 수 있는 칸은 'U' 또는 'D'여야 합니다.`,
};

const CONDITION = {
  NOT_INTEGER: (answer) => /[^0-9]/.test(answer),
  INVALID_DOMAIN: (answer) => answer < '3' || answer > '20',
  INVALID_MOVING: (answer) => answer !== 'U' || answer !== 'D',
};

module.exports = { CONDITION, ERROR_MESSAGE, GAME_MESSAGE };
