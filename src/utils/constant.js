const READ_MESSAGE = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVING_COMMAND: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});
const ERROR_MESSAGE = Object.freeze({
  IS_NUMBER_NAN: '[ERROR] 입력 값이 숫자여야 합니다.',
  IS_NUMBER_IN_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  IS_MOVING_COMMAND_VALID: '[ERROR] 올바른 명령어를 입력하세요. U 혹은 D만 입력하실 수 있습니다.',
  IS_GAME_COMMAND_VALID: '[ERROR] 올바른 명령어를 입력하세요. R 혹은 Q만 입력하실 수 있습니다.',
});
const OUTPUT_MESSAGE = Object.freeze({
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  GAME_END: '최종 게임 결과',
  SUCCESS: '성공',
  FAILURE: '실패',
  RESULT: '게임 성공 여부: ',
  TRY: '총 시도한 횟수: ',
});
module.exports = {
  READ_MESSAGE, ERROR_MESSAGE, OUTPUT_MESSAGE,
};
