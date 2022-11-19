const MESSAGE = {
  GAME_START: "다리 건너기 게임을 시작합니다.\n",
  GAME_RESULT: "\n최종 게임 결과\n",
  INPUT_BRIDGE_LENGTH: "다리의 길이를 입력해주세요.\n",
  INPUT_MOVING: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  INPUT_GAME_COMMAND:
    "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  SUCCESS_OR_FAIL: "\n게임 성공 여부: ",
  TOTAL_ATTEMPTS_COUNT: "총 시도한 횟수: ",
};

const GAME = {
  ATTEMPTS_COUNT_INIT: 1,
  REPLAY: "R",
  QUIT: "Q",
  SUCCESS: "성공",
  FAIL: "실패",
};

const BRIDGE = {
  UPPER: "U",
  LOWER: "D",
  UPPER_NUM: 1,
  LOWER_NUM: 0,
  POSSIBLE_SIGN: "O",
  IMPOSSIBLE_SIGN: "X",
};

const UNIT = {
  START: "[ ",
  END: " ]",
  DIVISION: " | ",
  BLANK: " ",
};

module.exports = { MESSAGE, GAME, BRIDGE, UNIT };
