const MESSAGES = {
  ENTER_SIZE: "다리 건너기 게임을 시작합니다. \n\n다리의 길이를 입력해주세요.\n",
  ENTER_MOVING: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  ENTER_RETRYQUIT: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  FINAL_RESULT: "\n최종 게임 결과\n",
  SUC_OR_FAIL: "게임 성공 여부: ",
  SUCCESS: "성공",
  FAIL: "실패",
  ATTEMPT_NUM: "총 시도한 횟수: ",
};

const ERROR_MESSAGES = {
  INVALID_SIZE: "[ERROR] 다리의 길이는 3 이상 20 이하여야 합니다.",
  INVALID_TYPE: "[ERROR] 다리의 길이는 정수여야 합니다.",
  INVALID_CHAR_UD: "[ERROR] U 또는 D만 입력할 수 있습니다.",
  INVALID_CHAR_RQ: "[ERROR] R 또는 Q만 입력할 수 있습니다.",
};

const BRIDGE = {
  LEFT_BRACKET: "[",
  RIGHT_BRACKET: "]",
  BAR: "|",
  SPACE: " ",
  THREE_SPACE: "   ",
  CORRECT: "O",
  WRONG: "X",
};

module.exports = {
  MESSAGES,
  ERROR_MESSAGES,
  BRIDGE,
};
