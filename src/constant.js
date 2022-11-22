const GAME_MSG = {
  START: '다리 건너기 게임을 시작합니다.',
  ENTER_SIZE: '\n다리의 길이를 입력해주세요.\n',
  ENTER_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  ENTER_RETRY_OR_QUIT:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const ERROR_MSG = {
  ENTER_NUMBER_THREE_TO_TWENTY:
    '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
  ENTER_U_OR_D:
    '[ERROR] 이동할 칸은 U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력해야 합니다.\n',
  ENTER_R_OR_Q:
    '[ERROR] R(재시작)과 Q(종료) 중 하나의 문자를 입력해야 합니다.\n',
};

const GAME_RESULT = {
  SUCCESS: '성공',
  FAIL: '실패',
  FINAL_RESULT: '최종 게임 결과',
  IS_PASS: '\n게임 성공 여부: ',
  TRY_COUNT: '총 시도한 횟수: ',
};

const SELECT = {
  RETRY: 'R',
  QUIT: 'Q',
};

const BRIDGE = {
  SIZE_MINIMUM: 3,
  SIZE_MAXIMUM: 20,
  CROSS_SUCCESS: 'O',
  CROSS_FAIL: 'X',
  UP: 'U',
  DOWN: 'D',
  START: '[ ',
  END: ' ]',
  SEPARATE: ' | ',
};

module.exports = {
  GAME_MSG,
  ERROR_MSG,
  GAME_RESULT,
  SELECT,
  BRIDGE,
};
