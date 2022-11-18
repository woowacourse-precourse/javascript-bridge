const { deepFreeze } = require('./helper');

const ERROR_MESSAGE = deepFreeze({
  bridgeLengthRange: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  checkStepCorrect: '[ERROR] U 또는 D 중 하나의 문자만 입력할 수 있습니다.',
  checkRetryCorrect: '[ERROR] R 또는 Q 중 하나의 문자만 입력할 수 있습니다.',
});

module.exports = ERROR_MESSAGE;
