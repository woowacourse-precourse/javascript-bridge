module.exports = {
  MESSAGE: {
    START: "다리 건너기 게임을 시작합니다.",
    SUCCESS: "성공",
    FAILURE: "실패",
    PROGRESS: "진행중",
    END: "\n최종 게임 결과",
    RESULT(result) {
      return `\n게임 성공 여부: ${result}`;
    },
    TRIAL_COUNT(count) {
      return `총 시도한 횟수: ${count}`;
    },
  },

  REQUEST: {
    INPUT_BRIDGE_SIZE: "\n다리의 길이를 입력해주세요.\n",
    INPUT_MOVE: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
    INPUT_GAME_COMMAND: "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  },

  ERROR: {
    INVALID_BRIDGE_SIZE: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
    INVALID_MOVING: "[ERROR] 위로 이동하려면 U, 아래로 이동하려면 D를 입력해야 합니다.",
    INVALID_GAME_COMMAND: "[ERROR] 재시도하려면 R, 종료하려면 Q를 입력해야 합니다.",
  },

  MOVING: {
    UP: "U",
    DOWN: "D",
  },

  COMMAND: {
    RETRY: "R",
    QUIT: "Q",
  },

  MAP: {
    O: "O",
    X: "X",
    BLANK: " ",
    BAR: " | ",
    BRACKET(mark) {
      return `[ ${mark} ]`;
    },
  },

  SIZE: {
    MINIMUM: 3,
    MAXIMUM: 20,
  },
};
