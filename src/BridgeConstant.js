const NUMBER = {
  BIRDGE_SIZE_MINIMUM: 3,
  BIRDGE_SIZE_MAXIMUM: 20,
  RANDOM_DOWN: 0,
  RANDOM_UP: 1,
};

const COMMAND = {
  UP: "U",
  DOWN: "D",
  RETRY: 'R',
  QUIT: 'Q',
};

const RESULT = {
  SUCCESS: 'O',
  FAIL: 'X',
  BLANK: ' ',
}

const MESSAGE = {
  START: "다리 건너기 게임을 시작합니다.\n",
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  MOVING: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  GAME_COMMAND: "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  GAME_RESULT: "\n최종 게임 결과",
};

const ERROR = {
  BRIDGE_SIZE_NUMBER: "[ERROR] 다리 길이는 숫자로 입력해야합니다.",
  BRIDGE_SIZE_RANGE: "[ERROR] 다리 길이는 3부터 20사이의 숫자여야 합니다.",
  MOVING: "[ERROR] 위 칸은 U, 아래 칸은 D로 입력해야 합니다.",
  GAME_COMMAND: "[ERROR] 재시도는 R, 종료는 Q로 입력해야 합니다.",
};

module.exports = {
  NUMBER,
  COMMAND,
  RESULT,
  MESSAGE,
  ERROR,
};
