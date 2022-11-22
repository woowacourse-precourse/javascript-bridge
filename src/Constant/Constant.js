const Constant = {
  QUESTION: {
    BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
    MOVING: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
    RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  },

  ERROR: {
    NOT_RANGE: "[ERROR] 3과 20사이의 자연수를 입력해주세요.\n",
    NOT_UD: "[ERROR] 유효한 값(U or D)을 입력해주세요.\n",
    NOT_RQ: "[ERROR] 유효한 값(R or Q)을 입력해주세요.\n",
  },
};
module.exports = Constant;
