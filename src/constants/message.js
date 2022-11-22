const INPUT_BRIDGE_LENGTH = "다리의 길이를 입력해주세요.\n";
const INPUT_MOVE = "이동할 칸을 선택해 주세요. (위: U, 아래: D)\n";
const RESTART =
  "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n";
const START = "다리 건너기 게임을 시작합니다.\n";
const FAIL = "실패";
const WIN = "성공";
const RESULT = "최종 게임 결과";
const CONSOLE_MESSAGE = {
  INPUT_BRIDGE_LENGTH,
  INPUT_MOVE,
  RESTART,
  START,
  FAIL,
  WIN,
  RESULT,
};

const NOT_RIGHT_BRIDGE_LENGTH =
  "[ERROR] 다리의 길이는 3부터 20까지 입력하실 수 있습니다.";
const NOT_RIGHT_MOVE = "[ERROR] U 또는 D를 입력해주세요.";
const NOT_RIGHT_INPUT = "[ERROR] R또는 Q를 입력해 주세요.";
const ERROR_MESSAGE = {
  NOT_RIGHT_BRIDGE_LENGTH,
  NOT_RIGHT_MOVE,
  NOT_RIGHT_INPUT,
};

module.exports = { CONSOLE_MESSAGE, ERROR_MESSAGE };
