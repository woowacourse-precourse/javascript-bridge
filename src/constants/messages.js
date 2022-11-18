const ERROR = {
  USER_INPUT_BRIDGE_SIZE_INVALID:
    '[ERROR] 다리 길이는 3부터 20 사이의 자연수여야 합니다.',
  USER_INPUT_MOVING_KEY_INVALID:
    '[ERROR] 이동할 칸은 영문 대문자 U나 D만 입력할 수 있습니다.',
  USER_INPUT_GAME_COMMAND_INVALID:
    '[ERROR] 종료 및 재시작 명령어는 영문 대문자 R이나 Q만 입력할 수 있습니다.'
};

const MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  READ_USER_INPUT_SIZE: '다리의 길이를 입력해주세요.\n',
  READ_USER_INPUT_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  READ_USER_INPUT_COMMAND:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  GAME_RESULT_PRINT: '최종 게임 결과',
  GAME_SUCCESS: '게임 성공 여부: 성공',
  GAME_FAILURE: '게임 성공 여부: 실패',
  TOTAL_TRIAL_NUMBERS: '총 시도한 횟수: '
};

module.exports = { ERROR, MESSAGE };
