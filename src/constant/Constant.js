const BRIDGE_DETAIL = Object.freeze({
  UP: {
    COMMAND: "U",
    NUMBER: 1,
  },
  DOWN: {
    COMMAND: "D",
    NUMBER: 0,
  },
  RETRY_COMMAND: "R",
  END_COMMAND: "Q",
  MIN: 3,
  MAX: 20,
});

const ERROR_MESSAGE = Object.freeze({
  IS_BRIDGE_LENGTH: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  IS_NAN: "[ERROR] 입력값은 반드시 숫자여야헙니다.",
  IS_NATURAL_NUMBER: "[ERROR] 자연수로 입력해주세요!",
  IS_BRIDGE_WORDS: `[ERROR] 올바른 커맨드 위:${BRIDGE_DETAIL.UP.COMMAND} 아래:${BRIDGE_DETAIL.DOWN.COMMAND}를 입력해주세요.`,
  IS_RETRY_WORDS: `[ERROR] 올바른 커맨드 재시도:s${BRIDGE_DETAIL.RETRY_COMMAND} 종료:${BRIDGE_DETAIL.END_COMMAND}를 입력해주세요.`,
  IS_NATURAL_NUMBER: "[ERROR] 자연수로 입력해주세요!",
});

const ANNOUNCEMENT_MESSAGE = Object.freeze({
  GAME_START: "다리 건너기 게임을 시작합니다.",
  GET_BRIDGE: "다리의 길이를 입력해주세요.",
  MOVE_SPACE: `이동할 칸을 선택해주세요. (위:${BRIDGE_DETAIL.UP.COMMAND}, 아래:${BRIDGE_DETAIL.DOWN.COMMAND})`,
  RETRY: `게임을 다시 시도할지 여부를 입력해주세요. (${BRIDGE_DETAIL.RETRY_COMMAND} 종료:${BRIDGE_DETAIL.END_COMMAND})`,
  GAME_RESULT: "최종 게임 결과",
  ALL_TRIES: "총 시도한 횟수",
  IS_SUCCESS: "게임 성공 여부",
});

module.exports = { ERROR_MESSAGE, BRIDGE_DETAIL, ANNOUNCEMENT_MESSAGE };
