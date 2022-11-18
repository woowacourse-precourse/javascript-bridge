const MESSAGE = {
  ASK_BRIDGE_LENGTH: "다리의 길이를 입력해주세요.\n",
  ASK_WHERE_WANT_TO_GO: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  ASK_RETRY_OR_QUIT:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  START_MESSAGE: "다리 건너기 게임을 시작합니다.\n",
  RESULT_MESSAGE: "최종 게임 결과",
  BRIDGE_STATE_MESSAGE: (state) => `[${state.join("|")}]`,
  SUCCESS_STATE_MESSAGE: (isSuccess) =>
    `게임 성공 여부: ${isSuccess ? "성공" : "실패"}`,
  TRYING_COUNT_MESSAGE: (tryCount) => `총 시도한 횟수: ${tryCount}`,
};

const CONSTRAINTS = {
  MINIMUM_SIZE_RANGE: 3,
  MAXIMUM_SIZE_RANGE: 20,
  START_STRING_OF_SIZE: "0",
};

const ERROR = {
  ERROR_NOT_ONLY_NUMBER: "[ERROR] 숫자만 입력 가능합니다.\n",
  ERROR_NOT_IN_RANGE: "[ERROR] 다리 길이는 3 이상 20 이하만 가능합니다.\n",
  ERROR_DONT_START_ZERO: "[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.\n",
  ERROR_NOT_ONLY_U_OR_D: "\n[ERROR] U 혹은 D만 입력 가능합니다.\n",
  ERROR_NOT_ONLY_R_OR_Q: "\n[ERROR] R 혹은 Q만 입력 가능합니다.\n",
};

const MAKER = {
  LOWER_BRIDGE_NUMBER: "0",
};

const PLAYER = {
  INITIAL_TRY_NUMBER: 1,
  INCREASE_TRY_NUMBER: 1,
  GMAE_FAIL: false,
  GAME_SUCCESS: true,
};

const ANSWER = {
  CORRECT_ANSWER: " O ",
  WRONG_ANSWER: " X ",
  EMPTY_ANSWER: "   ",
};

const COMMAND = {
  UPPER_BRIDGE_STRING: "U",
  LOWER_BRIDGE_STRING: "D",
  RETRY_STRING: "R",
  END_GAME_STRING: "Q",
};

module.exports = {
  MESSAGE,
  CONSTRAINTS,
  ERROR,
  MAKER,
  PLAYER,
  ANSWER,
  COMMAND,
};
