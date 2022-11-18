const Question = Object.freeze({
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  MOVE_DIRECTION: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RESTART: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
});

const Guide = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.\n\n",
  END: "최종 게임 결과",
  SUCCESS_RESULT: "게임 성공 여부: ",
  TOTAL_TRIAL: "총 시도한 횟수: ",
});

const ErrorMsg = Object.freeze({
  NOT_NUMBER: "[ERROR] 숫자를 입력해주세요!",
  OUT_OF_RANGE: "[ERROR] 다리의 길이는 3 ~ 20의 범위로만 입력 가능합니다!",
  NOT_MOVE_COMMAND: "[ERROR] 이동할 칸은 U, D로만 입력 가능합니다!",
  NOT_RESTART_COMMAND: "[ERROR] 재시작 결정은 R, Q로만 입력 가능합니다!",
});

module.exports = { Question, Guide, ErrorMsg };
