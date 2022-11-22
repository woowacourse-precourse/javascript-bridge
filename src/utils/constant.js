const GAME_START_STRING ="다리 건너기 게임을 시작합니다.\n"
const BRIDGE_NUMBER_INPUT ="다리의 길이를 입력해주세요.\n"
const PLAYER_MOVE_INPUT ="이동할 칸을 선택해주세요. (위: U, 아래: D)\n"
const RESTART_OR_QUIT_INPUT ="게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n"
const GAME_RESULT_STRING ="최종 게임 결과\n"
const GAME_SUCCESS_OR_NOT ="\n게임 성공 여부: "
const TOTAL_NUMBER_OF_ATTEMPTS ="총 시도한 횟수: "
const SUCCESS = "성공";
const FAIL = "실패"

const UP = "U";
const DOWN = "D";
const RESTART = "R";
const QUIT = "Q";
const RIGHT = "O";
const WRONG = "X";


const RANGE_BRIDGE_NUMBER_ERROR ="[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n"
const PLAYER_INPUT_ERROR ="[ERROR] 플레이어 입력 값이 U나 D가 아닙니다.\n"
const PLAYER_RETRY_INPUT_ERROR ="[ERROR] 게임을 다시 시도할지에 대한 입력이 R이나 Q가 아닙니다.\n"
const PLAYER_FLOAT_INPUT_ERROR ="[ERROR] 다리 길이 입력에 실수가 들어오면 안됩니다.\n"

module.exports = {
  GAME_START_STRING,
  BRIDGE_NUMBER_INPUT,
  PLAYER_MOVE_INPUT,
  RESTART_OR_QUIT_INPUT,
  GAME_RESULT_STRING,
  GAME_SUCCESS_OR_NOT,
  TOTAL_NUMBER_OF_ATTEMPTS,
  RANGE_BRIDGE_NUMBER_ERROR,
  PLAYER_INPUT_ERROR,
  SUCCESS,
  FAIL,
  PLAYER_RETRY_INPUT_ERROR,
  PLAYER_FLOAT_INPUT_ERROR,
  UP,
  DOWN,
  RESTART,
  QUIT,
  RIGHT,
  WRONG
}