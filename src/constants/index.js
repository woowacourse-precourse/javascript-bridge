const constants = Object.freeze({
  KEYWORD: {
    UP: "U",
    DOWN: "D",
    RETRY: "R",
    QUIT: "Q",
    SUCCESS_BRIDGE: "성공",
    FAIL_BRIDGE: "실패",
    SUCCESS_JUMP: "O",
    FALI_JUMP: "X",
  },
  INPUT: {
    READ_BRIDGE: "\n다리의 길이를 입력해주세요.\n",
    MOVING_BRIDGE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
    RETRY_BRIDGE:
      "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  },
  OUTPUT: {
    START_BRIDGE: "다리 건너기 게임을 시작합니다.",
    MAP_BLANK: " ",
    MAP_MIDDLE_DIVIDE: " | ",
    END_MESSAGE: "최종 게임 결과",
    MAP_DIVIDE: (message) => `[ ${message} ]`,
    END_SUCCESS: (SUCCESS) => `\n게임 성공 여부: ${SUCCESS}`,
    END_ATTEMPT: (ATTEMPT) => `총 시도한 횟수: ${ATTEMPT}`,
  },
  ERROR: {
    SIZE_ERROR: `[ERROR] 3 ~ 20 사이의 숫자를 입력해주세요.`,
    MOVE_ERROR: "[ERROR] 'U' 또는 'D'를 입력해주세요.",
    RETRY_ERROR: "[ERROR] 'R' 또는 'Q'를 입력해주세요.",
  },
  SIZE: {
    DIRECTION_SIZE: 2,
    MIN_SIZE: 3,
    MAX_SIZE: 20,
  },
  HASH: {
    1: "U",
    0: "D",
    U: "U",
    D: "D",
    R: "R",
    Q: "Q",
  },
});

module.exports = constants;
