const BRIDGE_INPUT_MESSAGES = Object.freeze({
  OPENING: "다리 건너기 게임을 시작합니다.\n",
  INPUT: "다리의 길이를 입력해주세요.\n",
  INPUT_ERROR: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n",
});

const USER_MOVE_MESSAGES = Object.freeze({
  INPUT: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  INPUT_ERROR: "[ERROR] 이동할 칸은 U(위) 와 D(아래)만 입력 가능합니다.\n",
});

const USER_RESTART_MESSAGES = Object.freeze({
  INPUT: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  INPUT_ERROR:
    "[ERROR] 재시도 여부는 R(재시도) 와 Q(종료)만 입력 가능합니다.\n",
});

const FINAL_RESULT_MESSAGES = Object.freeze({
  OPENING: "최종 게임 결과",
  SUCCESS_OR_FAILURE: "게임 성공 여부: ",
  SUCCESS: "성공",
  FAILURE: "실패",
  TRY_COUNT: "총 시도한 횟수: ",
});

module.exports = {
  BRIDGE_INPUT_MESSAGES,
  USER_MOVE_MESSAGES,
  USER_RESTART_MESSAGES,
  FINAL_RESULT_MESSAGES,
};
