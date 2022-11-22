const BRIDGE_GAME = {
  START: '다리 건너기 게임을 시작합니다.\n',
  LENGTH_INPUT: '다리의 길이를 입력해주세요.\n',
  MOVING_SELECT: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  MOVING_RE_SELECT: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RETRY_SELECT: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
}

const BRIDGE_GAME_OPTION = {
  UP: 'U',
  DWON: 'D',
  RETRY: 'R',
  END: 'Q',
  MAX_NUMBER: 20,
  MIN_NUMBER: 3,
};

const BRIDGE_GAME_RESULT = {
  ANSWER: (answer) => `${answer && '\n최종 게임 결과' || '최종 게임 결과'}`,
  ANSWER_KIT: (chlear) => `게임 성공 여부: ${chlear && '성공' || '실패'}`,
  TOTAL_COUNT: (count) => `총 시도한 횟수: ${count}`,
  ANSWER_INDEX: 0,
  ANSWER_KIT_INDEX: 1,
  TOTAL_COUNT_INDEX: 2,
};

const BRIDGE_FORM = {
  HIT: ' O ',
  MISS: ' X ',
  BLOCK: '   ',
  UP_POSITION: 0,
  DOWN_POSITION: 1,
  COMPLETE: (status, position) => `[${status[position].join('|')}]`
};

const ERROR = {
  LENGTH_SCOPE: '[ERROR] 3에서 20까지의 숫자만 입력하셔야 합니다.',
  LENGTH_TPYE: '[ERROR] 숫자만 입력하셔야 합니다.',
  MOVING_TPYE: '[ERROR] U(위) 와 D(아래) 로만 입력하셔야 합니다.',
  RETRY_TPYE: '[ERROR] 재시작(R) 과 종료(Q) 로만 입력하셔야 합니다.',
};

module.exports = {
  BRIDGE_GAME,
  BRIDGE_GAME_OPTION,
  BRIDGE_GAME_RESULT,
  BRIDGE_FORM,
  ERROR,
};
