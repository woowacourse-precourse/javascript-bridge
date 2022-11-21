module.exports = {
  NOTICE: Object.freeze({
    START_GAME: "다리 건너기 게임을 시작합니다.\n",
    INPUT_SIZE: "다리의 길이를 입력해주세요.\n",
    INPUT_DIRECTION: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
    INPUT_RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
    END_GAME: "최종 게임 결과",
  }),

  ERROR: Object.freeze({
    WRONG_BRIDGE_SIZE: "\n[ERROR] 다리 길이는 3 이상 20 이하의 정수여야 합니다.\n",
    WRONG_DIRECTION: "\n[ERROR] 위로 이동하기 위해서는 U를, 아래로 이동하기 위해서는 D를 입력하셔야 합니다.\n",
    WRONG_COMMAND: "\n[ERROR] 재시작 하기 위해서는 R을, 종료하기 위해서는 Q를 눌러야 입력하셔야 합니다\n",
  }),

  U: "U",
  D: "D",
  O: "O",
  X: "X",
  R: "R",
  Q: "Q",

  BLANK_SPACE: " ",

  SUCCESS: "성공",
  FAILURE: "실패",
};
