const GAME_CONDITION = Object.freeze({
  MIN_BRIDGE_LENGTH: 3,
  MAX_BRIDGE_LENGTH: 20,
  MOVE_UP: "U",
  MOVE_DOWN: "D",
  RANDOM_BRIDGE_NUMBER: {
    0: "D",
    1: "U",
  },
  BRIDGE_SEPERATOR: " | ",
  OPEN_BRACKET: "[",
  CLOSE_BRACKET: "]",
  CAN_MOVE: "O",
  CAN_NOT_MOVE: "X",
  BLANK_MOVE: " ",
  UP_INDEX: 0,
  DOWN_INDEX: 1,
  STATUS_SUCCESS: true,
  STATUS_FAIL: false,
  RESTART_GAME: "R",
  QUIT_GAME: "Q",
});

const GAME_MESSAGE = Object.freeze({
  START_GAME: "다리 건너기 게임을 시작합니다.",
  INPUT_BRIDGE_LENGTH: "다리의 길이를 입력해주세요.\n",
  INPUT_BRIDGE_SPACE_TO_MOVE: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RESTART_OR_QUIT:
    "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
});

const GAME_RESULT = Object.freeze({
  RESULT_MESSAGE: "최종 게임 결과",
  GAME_STATUS: (status) => `게임 성공 여부: ${status}`,
  STATUS_SUCCESS: "성공",
  STATUS_FAIL: "실패",
  TOTAL_ATTEMPTS: (attempts) => `\n총 시도한 횟수: ${attempts}`,
});

const ERROR_MESSAGE = Object.freeze({
  ERROR_PREFIX: "[ERROR] ",
  INPUT_SIZE_NOT_NUMBER: "다리 길이는 숫자값여야 합니다.",
  INPUT_SIZE_NOT_IN_RANGE: "다리 길이는 3 이상 20 이하여야 합니다.",
  INPUT_SPACE_LOWERCASE:
    "이동할 칸은 u 또는 d 가 아닌 대문자 U 또는 D여야 합니다.",
  INPUT_SPACE: "이동할 칸은 U 또는 D여야 합니다.",
  INPUT_COMMAND_LOWERCASE:
    "재시작 혹은 종료는 r 또는 q 가 아닌 대문자 R 또는 Q여야 합니다.",
  INPUT_COMMAND: "재시작 혹은 종료는 R 또는 Q여야 합니다.",
});

module.exports = { GAME_CONDITION, GAME_RESULT, GAME_MESSAGE, ERROR_MESSAGE };
