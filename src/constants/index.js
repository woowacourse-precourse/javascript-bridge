const KEYWORD = Object.freeze({
  UP: "U",
  DOWN: "D",
  RETRY: "R",
  QUIT: "Q",
  SUCCESS_BRIDGE: "성공",
  FAIL_BRIDGE: "실패",
  SUCCESS_JUMP: "O",
  FALI_JUMP: "X",
});

const INPUT = Object.freeze({
  READ_BRIDGE: "\n다리의 길이를 입력해주세요.\n",
  MOVING_BRIDGE: `이동할 칸을 선택해주세요. (위: ${KEYWORD.UP}, 아래: ${KEYWORD.DOWN})\n`,
  RETRY_BRIDGE: `\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${KEYWORD.RETRY}, 종료: ${KEYWORD.QUIT})\n`,
});

const OUTPUT = Object.freeze({
  START_BRIDGE: "다리 건너기 게임을 시작합니다.",
  MAP_BLANK: " ",
  MAP_MIDDLE_DIVIDE: " | ",
  END_MESSAGE: "최종 게임 결과",
  MAP_DIVIDE: (MESSAGE) => `[ ${MESSAGE} ]`,
  END_SUCCESS: (SUCCESS) => `\n게임 성공 여부: ${SUCCESS}`,
  END_ATTEMPT: (ATTEMPT) => `총 시도한 횟수: ${ATTEMPT}`,
});

const SIZE = Object.freeze({
  DIRECTION_SIZE: 2,
  MIN_SIZE: 3,
  MAX_SIZE: 20,
});

const ERROR = Object.freeze({
  SIZE_ERROR: `[ERROR] ${SIZE.MIN_SIZE} ~ ${SIZE.MAX_SIZE} 사이의 숫자를 입력해주세요.`,
  MOVE_ERROR: `[ERROR] '${KEYWORD.UP}' 또는 '${KEYWORD.DOWN}'를 입력해주세요.`,
  RETRY_ERROR: `[ERROR] '${KEYWORD.RETRY}' 또는 '${KEYWORD.QUIT}'를 입력해주세요.`,
});

const HASH = Object.freeze({
  1: KEYWORD.UP,
  0: KEYWORD.DOWN,
  U: KEYWORD.UP,
  D: KEYWORD.DOWN,
  R: KEYWORD.RETRY,
  Q: KEYWORD.QUIT,
});

module.exports = {
  KEYWORD,
  INPUT,
  OUTPUT,
  ERROR,
  SIZE,
  HASH,
};
