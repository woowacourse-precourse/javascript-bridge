const CONSTANT = Object.freeze({
  ERROR_MESSAGE: {
    BUILD_BRIDGE_ERROR: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
    MOVE_INPUT_ERROR: '[ERROR] 이동할 칸은 (위: U, 아래: D)만 입력가능합니다.',
    GAME_COMMAND_ERROR: '[ERROR] 재시도: R, 종료: Q 만 입력가능합니다.',
    INPUT_ERROR: '입력오류',
  },

  INPUT_LETTER: {
    ENTER_BRIDGE_LENGTH: '다리의 길이를 입력해주세요\n',
    ENTER_MOVE_LOCATION: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    ENTER_RESTART_WHETHER: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  },

  NORMAL_MESSAGE: {
    START_MESSAGE: '다리 건너기 게임을 시작합니다.\n',
    FINAL_RESULT: '최종 게임 결과',
    SUCCESS_WHETHER: '게임 성공 여부: ',
    FAIL: '실패',
    SUCCESS: '성공',
    TOTAL_ATTEMPT: '총 시도한 횟수: ',
  },

  MARKS: {
    SUCCESS_MARK: 'O',
    FAIL_MARK: 'X',
    NONE_MARK: 'N',

    UPSTAIR_MARK: 'U',
    DOWNSTAIR_MARK: 'D',

    QUIT_MARK: 'Q',
    RESTART_MARK: 'R',
  },

  Size: {
    BRIDGE_MIN_SIZE: 3,
    BRIDGE_MAX_SIZE: 20,
  },
});

module.exports = CONSTANT;
