const MESSAGE = {
  START: "다리 건너기 게임을 시작합니다.",
  INPUT_LENGTH: "다리 길이를 입력해주세요.\n",
  INPUT_MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  INPUT_RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  END: "최종 게임 결과",

  RESULT_VICTORY: (isVictory) => {
    return `게임 성공 여부: ${isVictory ? "성공" : "실패"}`;
  },
  RESULT_COUNT: (count) => {
    return `총 시도한 횟수: ${count}`;
  },

  ERROR: {
    INVALID_INTEGER: "[ERROR] 정수를 입력해주세요.",
    INVALID_LENGTH: "[ERROR] 다리 길이는 3 이상 20이하의 정수여야 합니다.",

    INVALID_MOVE: "[ERROR] U 또는 D를 입력해주세요.",
  },
};

module.exports = MESSAGE;
