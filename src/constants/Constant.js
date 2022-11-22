const Question = Object.freeze({
  BRIDGE_SIZE: "\n다리의 길이를 입력해주세요.\n",
  MOVE_DIRECTION: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RESTART: "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
});

const Guide = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.",
  END: "최종 게임 결과",
  Game_RESULT: "게임 성공 여부: ",
  TOTAL_TRIAL: "총 시도한 횟수: ",
  SUCCESS: "성공",
  FAIL: "실패",
});

const ErrorMsg = Object.freeze({
  NOT_NUMBER: "[ERROR] 숫자를 입력해주세요!",
  OUT_OF_RANGE: "[ERROR] 다리의 길이는 3 ~ 20의 범위로만 입력 가능합니다!",
  NOT_MOVE_COMMAND: "[ERROR] 이동할 칸은 U, D로만 입력 가능합니다!",
  NOT_RESTART_COMMAND: "[ERROR] 재시작 결정은 R, Q로만 입력 가능합니다!",
  EMPTY: "[ERROR] 입력값이 없습니다. 올바른 값을 입력해주세요!",
});

module.exports = { Question, Guide, ErrorMsg };
