const MESSAGE = Object.freeze({
  INTRO: "다리 건너기 게임을 시작합니다.\n",
  SIZE: "다리의 길이를 입력해주세요.\n",
  DIRECTION: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  COMMAND: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  FINAL_RESULT: "최종 게임 결과",
  GAME_RESULT: "게임 성공 여부:",
  TRY_COUNT: "총 시도한 횟수:",
  SUCCESS: "성공",
  FAIL: "실패",
});

const FLAG = Object.freeze({
  UPPER: "U",
  LOWER: "D",
  RETRY: "R",
  QUIT: "Q",
  CORRECT: "O",
  WRONG: "X",
});

module.exports = { MESSAGE, FLAG };
