const ERROR_MESSAGE = {
  INTEGER: '[ERROR] 다리 길이는 양의 정수여야 합니다.',
  DOMAIN: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
};

const CONDITION = {
  NOT_INTEGER: (answer) => /[^0-9]/.test(answer),
  INVALID_DOMAIN: (answer) => answer < '3' || answer > '20',
};

module.exports = { CONDITION, ERROR_MESSAGE };
