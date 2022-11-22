const START_GAME_MSG = '다리 건너기 게임을 시작합니다.\n';

const REQUEST = {
  BRIDGE_SIZE_REQUEST: '다리의 길이를 입력해주세요.\n',
  MOVE_REQUEST: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RETRY_REQUEST:
  '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};
const ERROR = {
  MOVE_INPUT_ERROR: '\n[ERROR] U 또는 D 를 입력하여야 합니다.',
  RETRY_INPUT_ERROR: '\n[ERROR] R 또는 Q를 입력하여야 합니다.',
  BRIDGE_SIZE_ERROR: '\n[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
};

const BRIDGE = {
  MOVE_UP: 'U',
  MOVE_DOWN: 'D',
  SUCCESS: 'O',
  FAIL: 'X',
  BLANK: ' ',
  START_BRIDGE: '[',
  END_BRIDGE: ']',
  BAR: ' | ',
  MIN_BRIDGE_SIZE: 3,
  MAX_BRIDGE_SIZE: 20,
};

const RESULT = {
  RESULT_MSG: '\n최종 게임 결과',
  FAIL_MSG: '게임 성공 여부: 실패\n',
  SUCCESS_MSG: '\n게임 성공 여부: 성공',
  TOTAL_COUNT_MSG: '총 시도한 횟수: ',
};

module.exports = {
  START_GAME_MSG,
  REQUEST,
  ERROR,
  RESULT,
  BRIDGE,
};
