const GAME_MESSAGE = {
  START: "다리 건너기 게임을 시작합니다.\n",
  INPUT_BRIDGE_LENGTH: "다리의 길이를 입력해주세요.\n",
  INPUT_MOVING_DIRECTION: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  INPUT_GAME_COMMAND:
    "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  TOTAL_RESULT: "\n최종 게임 결과\n",
  SUCCESS_OR_FAIL: "\n게임 성공 여부: ",
  TOTAL_ATTEMPTS_COUNT: "총 시도한 횟수: ",
};

const ERROR_MESSAGE = {
  BRIDGE_SIZE_IS_NAN: "[ERROR] 다리 길이는 숫자로 입력해주세요.",
  BRIDGE_SIZE_RANGE:
    "[ERROR] 다리 길이는 3 이상 20 이하의 숫자로 입력해주세요.",
  MOVING_DIRECTION:
    "[ERROR] 이동할 칸은 U(위 칸)와 D(아래 칸) 중 하나의 문자로 입력해주세요.",
  GAME_COMMAND:
    "[ERROR] 게임 재시작 여부는 R(재시작)과 Q(종료) 중 하나의 문자로 입력해주세요.",
};

const GAME_OPTION = {
  ATTEMPTS_COUNT_INIT: 1,
  REPLAY: "R",
  QUIT: "Q",
  SUCCESS: "성공",
  FAIL: "실패",
};

const BRIDGE_SIGN = {
  UPPER: "U",
  LOWER: "D",
  UPPER_NUM: 1,
  LOWER_NUM: 0,
  POSSIBLE: "O",
  IMPOSSIBLE: "X",
};

const OUTPUT_MARK = {
  START: "[ ",
  END: " ]",
  DIVISION: " | ",
  BLANK: " ",
};

module.exports = {
  GAME_MESSAGE,
  ERROR_MESSAGE,
  GAME_OPTION,
  BRIDGE_SIGN,
  OUTPUT_MARK,
};
