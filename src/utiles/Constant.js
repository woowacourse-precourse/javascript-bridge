const CONSTANT = {
  MESSAGE: {
    GAME_START: '다리 건너기 게임을 시작합니다.',
    BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
    CHOOSE_UPDOWN: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    FINAL_MESSAGE: '\n최종 게임 결과',
    FAIL_OR_SUCCESS: '게임 성공 여부: ',
    TRY_COUNT: '총 시도한 횟수: ',
  },

  ERROR: {
    SIZE_WORD: '[ERROR] 숫자 이외의 문자를 입력하면 안됩니다.',
    SIZE_RANGE: '[ERROR] 3~20 사이의 수를 입력해야 합니다.',
    UPDOWN_WORD: '[ERROR] U 또는 D만 입력 가능합니다.'
  },
};

module.exports = CONSTANT;
