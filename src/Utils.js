const BRIDGE_SIZE_START = 3;
const BRIDGE_SIZE_END = 20;
const BRIDGE_UP = "U";
const BRIDGE_DOWN = "D";
const MARKING_PASS = "O";
const MARKING_FAIL = "X";
const MARKING_EMPTY = " ";
const GAME_COMMAND_RETRY = "R";
const GAME_COMMAND_QUIT = "Q";

const MESSAGE_GAME_START = "다리 건너기 게임을 시작합니다.";

const MESSAGE_GET_BRIDGE_SIZE = "다리의 길이를 입력해주세요. \n";
const MESSAGE_GET_MOVING = "이동할 칸을 선택해주세요. (위: U, 아래: D) \n";
const MESSAGE_GET_GAME_COMMAND =
  "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q) \n";

const ERROR_NOT_NUMBER = "[ERROR] 숫자를 입력해 주세요.";
const ERROR_OUT_OF_RANGE = "[ERROR] 3~20 사이의 숫자를 입력해 주세요.";
const ERROR_NOT_INTEGER = "[ERROR] 정수를 입력해 주세요.";

const ERROR_NOT_UPPER_CASE = "[ERROR] 대문자로 입력해 주세요.";

const ERROR_UNEXPECTED_MOVING = "[ERROR] U 또는 D를 입력해 주세요.";

const ERROR_UNEXPECTED_GAME_COMMAND = "[ERROR] R 또는 Q를 입력해 주세요.";

module.exports = {
  BRIDGE_SIZE_START,
  BRIDGE_SIZE_END,
  BRIDGE_UP,
  BRIDGE_DOWN,
  MARKING_PASS,
  MARKING_FAIL,
  MARKING_EMPTY,
  GAME_COMMAND_RETRY,
  GAME_COMMAND_QUIT,
  MESSAGE_GAME_START,
  MESSAGE_GET_BRIDGE_SIZE,
  MESSAGE_GET_MOVING,
  MESSAGE_GET_GAME_COMMAND,
  ERROR_NOT_NUMBER,
  ERROR_OUT_OF_RANGE,
  ERROR_NOT_INTEGER,
  ERROR_NOT_UPPER_CASE,
  ERROR_UNEXPECTED_MOVING,
  ERROR_UNEXPECTED_GAME_COMMAND,
};
