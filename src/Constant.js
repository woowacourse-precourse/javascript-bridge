const BRIDGE_LENGTH_NOT_NUMBE_ERROR = "[ERROR] 숫자만 입력해 주세요";
const BRIDGE_LENGTH_RANGE_OUT_ERROR =
  "[ERROR] 3 에서 20 사이의 수만 입력가능합니다";
const MOVE_COMMAND_ELSE_CHAR_ERROR = "[ERROR] U 또는 D 만 입력해 주세요";
const RETRY_COMMAND_ELSE_CHAR_ERROR = "[ERROR] R 또는 Q 만 입력해 주세요";

const MOVE_SUCCESS = "SUCCESS";
const MOVE_FAIL = "FAIL";
const MOVE_END = "END";
const DOWN_BRIDGE_SYMBOL = "D";
const UP_BRIDGE_SYMBOL = "U";
const CORRECT_BRIDGE_SYMBOL = "O";
const NOT_CORRECT_BRIDGE_SYMBOL = "X";
const RETRY_GAME = "R";
const QUIT_GAME = "Q";


const BRIDGE_LENGTH_QUERY = "다리의 길이를 입력해주세요.";
const MOVE_COMMAND_QUERY = "이동할 칸을 선택해주세요. (위: U, 아래: D)";
const RETRY_QUERY =
  "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)";

module.exports={
  BRIDGE_LENGTH_NOT_NUMBE_ERROR,
  BRIDGE_LENGTH_RANGE_OUT_ERROR,
  MOVE_COMMAND_ELSE_CHAR_ERROR,
  MOVE_SUCCESS,
  MOVE_FAIL,
  MOVE_END,
  DOWN_BRIDGE_SYMBOL,
  UP_BRIDGE_SYMBOL,
  CORRECT_BRIDGE_SYMBOL,
  NOT_CORRECT_BRIDGE_SYMBOL,
  RETRY_GAME,
  QUIT_GAME,
  BRIDGE_LENGTH_QUERY,
  MOVE_COMMAND_QUERY,
  RETRY_QUERY
}