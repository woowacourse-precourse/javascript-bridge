const Constant = {
  OPEN: "[",
  SEPARATE: "|",
  CLOSE: "]",
  UP: "U",
  DOWN: "D",
  RETRY: "R",
  QUIT: "Q",
  O: "O",
  X: "X",
  BLANK: " ",
  INPUT: {
    BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
    NEXT_STEP: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
    GAME_RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  },
  ERROR: {
    BRIDGE_SIZE: "[ERROR] 3이상 20이하 숫자만 입력하세요.",
    ONLY_NUMBER: "[ERROR] 오직 숫자만 입력하세요.",
    ONLY_ONE_NUMBER: "[ERROR] 한 개의 숫자만 입력하세요.",
    ONLY_U_OR_D: "[ERROR] U와 D만 입력하세요.",
    ONLY_UPPERCASE: "[ERROR] 대문자로 입력하세요.",
    ONLY_INPUT_ONE: "[ERROR] 한개만 입력하세요.",
    ONLY_R_OR_Q: "R과 D만 입력하세요.",
  },
  PRINT: {
    FINAL_RESULT: "최종 게임 결과",
    SUCCESS: `게임 성공 여부: 성공`,
    FAIL: `게임 성공 여부: 실패`,
    GAME_COUNT: (gameCount) => `총 시도한 횟수: ${gameCount}`,
  },
};

module.exports = Constant;
