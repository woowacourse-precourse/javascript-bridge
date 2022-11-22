const INPUT_VIEW_CONSTANT = {
  BRIDGE_SIZE_MENT: "다리의 길이를 입력해주세요.\n",
  MOVING_MENT: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RETRY_MENT: "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const OUTPUT_VIEW_CONSTANT = {
  PRINT_TOPBRIDGE: (topBridge) => `[ ${topBridge.join(" | ")} ]`,
  PRINT_BOTTOMBRIDGE: (bottomBridge) => `[ ${bottomBridge.join(" | ")} ]`,

  START_MENT: "다리 건너기 게임을 시작합니다.\n",
  GAME_RESULT_MENT: "\n최종 게임 결과",
  SUCCESS_OR_FAIL_MENT: (successOrFailure) => `\n게임 성공 여부: ${successOrFailure}`,
  TOTAL_TRY_COUNT_MENT: (retryCount) => `총 시도한 횟수: ${retryCount}`,
};

const VALIDATOR_CONSTANT = {
  MIN_BRIDGE_SIZE: 3,
  MAX_BRIDGE_SIZE: 20,

  ERROR_MENT: "[ERROR] ",

  BRIDGE_SIZE_NOT_NUMBER: "다리 길이는 숫자로 입력해야 합니다.",
  BRIDGE_SIZE_RANGE_ERROR: "다리길이의 범위는 3부터 20까지여야 합니다.",

  MOVEKEY_FORM_ERROR: "이동할 칸에는 대문자 U 혹은 D만 입력할 수 있습니다.",

  RETRYKEY_FORM_ERROR: "재시도 여부에는 대문자 R 혹은 Q만 입력할 수 있습니다.",
};

const INPUT_KEYS = {
  UP: "U",
  DOWN: "D",

  RETRY: "R",
  QUIT: "Q",
};

const OUTPUT_KEYS = {
  SUCCESS: "O",
  FAIL: "X",
  BLANK: " ",
};

const FIANL_RESULT = {
  SUCCESS_MENT: "성공",
  FAIL_MENT: "실패",
};

module.exports = { INPUT_VIEW_CONSTANT, OUTPUT_VIEW_CONSTANT, VALIDATOR_CONSTANT, INPUT_KEYS, FIANL_RESULT, OUTPUT_KEYS };
