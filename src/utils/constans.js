const COMMAND = {
  MOVING: { UP: "U", DOWN: "D" },
  GAME: { RETRY: "R", QUIT: "Q" },
};

const BRIDGE = {
  MAP: {
    START: "[ ",
    END: " ]",
    DIVIDING_LINE: " | ",
  },
  SIZE: {
    MINIMUN: 3,
    MAXIMUM: 20,
  },
};

const INPUT_MESSAGE = {
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.",
  MOVING_COMMAND: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  GAME_COMMAND:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
};

const OUTPUT_MESSAGE = {
  GAME_START: "다리 건너기 게임을 시작합니다.",
  GAME_END: "최종 게임 결과",
  GAME_SUCCESS_STATUS: (isGameSuccess) =>
    `게임 성공 여부: ${isGameSuccess ? "성공" : "실패"}`,
  GAME_TRY_COUNT: (tryCount) => `총 시도한 횟수: ${tryCount}`,
  BRIDGE_MAP: (bridgeMap) =>
    `${BRIDGE.MAP.START}${bridgeMap.join(BRIDGE.MAP.DIVIDING_LINE)}${
      BRIDGE.MAP.END
    }`,
};

const ERROR_MESSAGE = {
  BRIDGE_SIZE: `[ERROR] 다리 길이는 ${BRIDGE.SIZE.MINIMUN}부터 ${BRIDGE.SIZE.MAXIMUM} 사이의 숫자여야 합니다.`,
  MOVING_COMMAND: `[ERROR] 이동할 칸 입력은 "${COMMAND.MOVING.UP}" 또는 "${COMMAND.MOVING.DOWN}"이여야 합니다.`,
};

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  COMMAND,
  ERROR_MESSAGE,
  BRIDGE,
};
