const MESSAGE = {
  BRIDGE_GAME_START: "다리 건너기 게임을 시작합니다.\n",
  INPUT_BRIDGE_LENGTH: "다리의 길이를 입력해주세요.\n",
  CHOOSE_MOVE_SPACE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  SELECT_RETRY:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  PRINT_RESULT: "최종 게임 결과",
  PRINT_GAME_RESULT: "게임 성공 여부: ",
  PRINT_TRY_COUNT_MESSAGE: "총 시도한 횟수: ",
  SUCCESS: "성공",
  FAIL: "실패",
};

const ERR_MESSAGE = {
  ERR_BRIDGE_LENGTH: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  ERR_ISNUMBER: "[ERROR] 숫자 형식으로 입력되어야 합니다.",
  ERR_COMMAND_KEY: "[ERROR] 잘못된 명령어를 입력하셨습니다.",
};

const COMMAND_VALUE = {
  RETRY: "R",
  QUIT: "Q",
  UP: "U",
  DOWN: "D",
};

const GAME_RESOURCE = {
  START_BRACKET: "[ ",
  END_BRACKET: " ]",
  VERTICAL: " | ",
  CAN_GO: "O",
  CANT_GO: "X",
  BLANK: " ",
  UPSIDE: "U",
  DOWNSIDE: "D",
  WRONG: "wrong",
  RIGHT: "right",
  ALLRIGHT: "allRight",
};
module.exports = { MESSAGE, ERR_MESSAGE, COMMAND_VALUE, GAME_RESOURCE };
