const ERROR_MESSAGE = Object.freeze({
  BRIDGE_LENGTH: '[ERROR] 3 이상 20 이하의 숫자가 아닙니다.',
  SPACE: '[ERROR] U 또는 D 가 아닙니다. (대문자 확인)',
  COMMAND: '[ERROR] Q 또는 R 이 아닙니다. (대문자 확인)'
});
const INVALID_INPUT_ERROR = Object.freeze({
  TITLE: 'Invalid Input',
  MESSAGE: '[ERROR] 유효하지 않은 입력입니다.'
});

module.exports = {
  ERROR_MESSAGE,
  INVALID_INPUT_ERROR
};
