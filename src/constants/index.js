const constants = Object.freeze({
  KEYWORD: {
    UP: "U",
    DOWN: "D",
    SUCCESS_BRIDGE: "성공",
    FAIL_BRIDGE: "실패",
    SUCCESS_JUMP: "O",
    FALI_JUMP: "X",
  },
  INPUT: {
    READ_BRIDGE: "\n다리의 길이를 입력해주세요.\n",
    MOVING_BRIDGE: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
    RETRY_BRIDGE:
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
  },
  OUTPUT: {
    START_BRIDGE: "다리 건너기 게임을 시작합니다.",
    SUCCESS_BRIDGE: (SUCCESS) => `게임 성공 여부: ${SUCCESS}`,
    ATTEMPT_BRIDGE: (ATTEMPT) => `총 시도한 횟수: ${ATTEMPT}`,
  },
  SIZE: {
    MIN_SIZE: 3,
    MAX_SIZE: 20,
  },
  HASH: {
    1: "U",
    0: "D",
    U: "U",
    D: "D",
  },
});

module.exports = constants;
