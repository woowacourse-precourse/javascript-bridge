const PRINT_MESSAGE = {
  GAME_START: "다리 건너기 게임을 시작합니다.\n",
};

const INPUT_MESSAGE = {
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  MOVING: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  GAME_COMMAND:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const ERROR_MESSAGE = {
  BRIDGE_SIZE: {
    NOT_A_NUMBER: "[ERROR] 숫자를 입력하세요.",
    INVALID_RANGE: "[ERROR] 3이상 20이하의 숫자만 입력가능합니다.",
  },
  MOVING: "[ERROR] 'U'혹은 'D'만 입력가능합니다.",
  COMMAND: "[ERROR] 'R'혹은 'Q'만 입력가능합니다.",
};

module.exports = { PRINT_MESSAGE, INPUT_MESSAGE, ERROR_MESSAGE };
