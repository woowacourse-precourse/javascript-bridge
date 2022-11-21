const START_GAME_MSG = '다리 건너기 게임을 시작합니다.\n';
const BRIDGE_SIZE_REQUEST = '다리의 길이를 입력해주세요.\n';
const MOVE_REQUEST = '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n';
const RETRY_REQUEST =
  '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n';
const BRIDGE_SIZE_ERROR =
  '\n[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
const MOVE_INPUT_ERROR = '\n[ERROR] U 또는 D 를 입력하여야 합니다.';
const RETRY_INPUT_ERROR = '\n[ERROR] R 또는 Q를 입력하여야 합니다.';
const MIN_BRIDGE_SIZE = 3;
const MAX_BRIDGE_SIZE = 20;
const MOVE_UP = 'U';
const MOVE_DOWN = 'D';
const SUCCESS = 'O';
const FAIL = 'X';
const BLANK = ' ';
const START_BRIDGE = '[';
const END_BRIDGE = ']';
const BAR = ' | ';
const RESULT_MSG = '\n최종 게임 결과';
const FAIL_MSG = '게임 성공 여부: 실패\n';
const SUCCESS_MSG = '\n게임 성공 여부: 성공';
const TOTAL_COUNT_MSG = '총 시도한 횟수: ';
module.exports = {
  START_GAME_MSG,
  BRIDGE_SIZE_REQUEST,
  MOVE_REQUEST,
  RETRY_REQUEST,
  BRIDGE_SIZE_ERROR,
  RETRY_INPUT_ERROR,
  MIN_BRIDGE_SIZE,
  MAX_BRIDGE_SIZE,
  MOVE_UP,
  MOVE_DOWN,
  MOVE_INPUT_ERROR,
  RESULT_MSG,
  FAIL_MSG,
  SUCCESS_MSG,
  TOTAL_COUNT_MSG,
  SUCCESS,
  FAIL,
  BLANK,
  START_BRIDGE,
  END_BRIDGE,
  BAR,
};
