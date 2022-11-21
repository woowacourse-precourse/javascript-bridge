module.exports = {
  NOTICE: Object.freeze({
    START_GAME: "다리 건너기 게임을 시작합니다.\n",
    INPUT_SIZE: "다리의 길이를 입력해주세요.\n",
    INPUT_DIRECTION: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  }),

  ERROR: Object.freeze({
    WRONG_BRIDGE_SIZE: "\n[ERROR] 다리 길이는 3 이상 20 이하의 정수여야 합니다.\n",
    WRONG_DIRECTION: "\n[ERROR] 위로 이동하기 위해서는 U를, 아래로 이동하기 위해서는 D를 입력하셔야 합니다.\n",
  }),

  U: "U",
  D: "D",
};
