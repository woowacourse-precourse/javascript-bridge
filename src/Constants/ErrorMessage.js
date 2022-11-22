const ERROR = Object.freeze({
  INVALID_LENGTH: '[ERROR] 3~20 사이의 숫자만 입력 가능합니다.',
  MOVE_ORDER: '[ERROR] 위: U, 아래: D 두 방향키에 대한 입력만 가능합니다.',
  RETRY_COMMAND: '[ERROR] 재시도: R, 종료: Q 두 응답에 대한 입력만 가능합니다.',
});

module.exports = ERROR;
