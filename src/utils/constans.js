const COMMAND = {
  MOVING: { UP: "U", DOWN: "D" },
  GAME: { RETRY: "R", QUIT: "Q" },
};

const BRIDGE_MAP = {
  START: "[ ",
  END: " ]",
  DIVIDING_LINE: " | ",
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
    `${BRIDGE_MAP.START}${bridgeMap.join(BRIDGE_MAP.DIVIDING_LINE)}${
      BRIDGE_MAP.END
    }`,
};

const ERROR_MESSAGE = {
  BRIDGE_SIZE: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
};

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, COMMAND, ERROR_MESSAGE };
