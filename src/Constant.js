const Question = Object.freeze({
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  MOVE_DIRECTION: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RESTART: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
});

const Guide = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.\n\n",
  END: "최종 게임 결과\n",
  SUCCESS_RESULT: "게임 성공 여부: ",
  TOTAL_TRIAL: "총 시도한 횟수: ",
});

module.exports = { Question, Guide };
