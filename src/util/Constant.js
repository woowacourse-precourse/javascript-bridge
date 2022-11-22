const CONSTANT = {
  MESSAGE: {
    START_GAME: '다리 건너기 게임을 시작합니다.\n',
    INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
    UPDOWN: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    END_GAME: '최종 게임 결과',
    COUNT: '총 시도한 횟수: ',
    CHECK_ANSWER: '게임 성공 여부: ',
    RETRY_QUIT: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
    FINAL: '\n최종 게임 결과',
  },

  RESULT: {
    FAIL: '실패',
    SUCCESS: '성공',
  },

  OX: {
    CORRECT: 'O',
    WRONG: 'X',
  },

  INPUT_VALUE: {
    UP: 'U',
    DOWN: 'D',
    REPLAY: 'R',
    QUIT: 'Q',
  },

  ERROR: {
    NOT_NUMBER: '[ERROR] 숫자 이외의 값은 입력할 수 없습니다.',
    NOT_RANGE: '[ERROR] 3 ~ 20 사이의 값만 입력 가능합니다.',
    UPDOWN_WRONG: '[ERROR] 이동 시, 입력은 U / D 만 가능합니다.',
    REPLAY_WRONG: '[ERROR] 입력은 R / Q 만 가능합니다.',
  },
};

module.exports = CONSTANT;
