const MESSAGE = {
  START_GAME: "다리 건너기 게임을 시작합니다.",
  GAME_RESULT: "최종 게임 결과",
  GAME_SUCEESS: "게임 성공 여부: 성공",
  GAME_FAIL: "게임 성공 여부: 실패",
  TRY_TIMES(tryTimes) {
    return `총 시도한 횟수: ${tryTimes}`;
  },

  REQUEST: {
    BRIDGE_SIZE: "다리의 길이를 입력해주세요.",
    SELECT_MOVE_TO_UP_OR_DOWN: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
    RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
  },

  ERROR: {
    IS_NOT_VALID_RANGE_BRIDGE_SIZE: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
    ANSWER_IS_MUST_BE_U_OR_D: "[ERROR] 이동할 칸을 선택할 때 'U' 또는 'D'만 입력해야 합니다.",
    ANSWER_IS_MUST_BE_R_OR_Q: "[ERROR] 게임을 다시 시도할지 선택할 때 'R' 또는 'Q'만 입력해야 합니다.",
  },
};

module.exports = MESSAGE;
