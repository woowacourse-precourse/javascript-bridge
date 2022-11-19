const BRIDGE_GAME_MESSAGES = Object.freeze({
  OPENING: "다리 건너기 게임을 시작합니다.\n",
  LENGTH_INPUT: "다리의 길이를 입력해주세요.\n",
  MOVE_INPUT: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RESTART_INPUT:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  FINAL_RESULT: "최종 게임 결과\n",
  SUCCESS_STATUS: "게임 성공 여부: ",
  TRY_COUNT: "총 시도한 횟수: ",
});

module.exports = BRIDGE_GAME_MESSAGES;
