module.exports = Object.freeze({
  UP_AND_DOWN: {
    1: "U",
    0: "D",
  },
  MESSAGES: {
    START: "다리 건너기 게임을 시작합니다.\n",
    ASK_SIZE: "다리의 길이를 입력해주세요.\n",
    ASK_MOVING: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
    ASK_RETRY:
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
    RESULT: "최종 게임 결과",
  },
  TRACE_MARKS: {
    START: "[",
    CORRECT: " O ",
    INCORRECT: " X ",
    SEPARATOR: "|",
    BLANK: "   ",
    END: "]",
  },
  RETRY_COMMAND: {
    RETRY: "R",
    QUIT: "Q",
  },
});
