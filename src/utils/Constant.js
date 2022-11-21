const Constant = {
  INPUT: {
    BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
    NEXT_STEP: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
    GAME_RETRY:
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  },
  ERROR: {
    BRIDGE_SIZE: "[ERROR] 3이상 20이하 숫자만 입력하세요.",
    ONLY_NUMBER: "[ERROR] 오직 숫자만 입력하세요.",
    ONLY_ONE_NUMBER: "[ERROR] 한 개의 숫자만 입력하세요.",
    ONLY_U_OR_D: "U와 D만 입력하세요.",
    ONLY_UPPERCASE: "대문자로 입력하세요.",
    ONLY_INPUT_ONE: "한개만 입력하세요.",
  },
};

module.exports = Constant;
