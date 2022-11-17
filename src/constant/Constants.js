const InputConstants = {
  ASK_BRIDGE_LENGTH: "다리의 길이를 입력해주세요.\n",
  ASK_WHERE_WANT_TO_GO: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  ASK_RETRY_OR_QUIT:
    "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const OutputConstants = {
  START_MESSAGE: "다리 건너기 게임을 시작합니다.\n",
  BRIDGE_STATE: (state) => `[${state.join("|")}]`,
  RESULT_MESSAGE: "\n최종 게임 결과",
  SUCCESS_STATE: (isSuccess) =>
    `게임 성공 여부: ${isSuccess ? "성공" : "실패"}`,
  TRYING_COUNT: (tryCount) => `총 시도한 횟수: ${tryCount}`,
};

const ConstraintsConstants = {
  ERROR_NOT_ONLY_NUMBER: "[ERROR] 숫자만 입력 가능합니다.\n",
  ERROR_NOT_IN_RANGE: "[ERROR] 다리 길이는 3 이상 20 이하만 가능합니다.\n",
  ERROR_DONT_START_ZERO: "[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.\n",
  ERROR_NOT_ONLY_U_OR_D: "[ERROR] U 혹은 D만 입력 가능합니다.\n",
  ERROR_NOT_ONLY_R_OR_Q: "[ERROR] R 혹은 Q만 입력 가능합니다.\n",
};

module.exports = { InputConstants, OutputConstants, ConstraintsConstants };
