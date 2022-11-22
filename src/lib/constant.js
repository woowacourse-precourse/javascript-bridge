const MESSAGES = {
  GAME_START: "다리 건너기 게임을 시작합니다.\n",
  GET_LENGTH: "다리의 길이를 입력해주세요.\n",
  WHERE_TO_MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  GAME_RESULT: "최종 게임 결과",
  DO_IT_AGAIN:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const ERROR = {
  GET_LENGTH: "다리의 길이를 입력해주세요.\n",
  WHERE_TO_MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  GAME_RESULT: "최종 게임 결과",
};

const TEMPLATE = {
  ARE_YOU_WIN: (isWin) => `게임 성공 여부: ${isWin ? "성공" : "실패"}`,
  TRY_COUNT: (count) => `총 시도한 횟수: ${count}`,
};
module.exports = {
  MESSAGES,
  TEMPLATE,
};
