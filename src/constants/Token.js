const CONFIG = Object.freeze({
  BRIDGE_START: 3,
  BRIDGE_END: 20,
});

const ENTITY = Object.freeze({
  NEW_LINE: "\n",
});

const KEY = Object.freeze({
  BRIDGE_UP: "U",
  BRIDGE_DOWN: "D",
  SELECT_RESTART: "R",
  SELECT_QUIT: "Q",
});

const GAME_CHAR = Object.freeze({
  PASS: "O",
  FAIL: "X",
  EMPTY: " ",
  MAP_START: "[",
  MAP_END: "]",
  MAP_DIVIDER: " | ",
});

const GAME_ANSWER = Object.freeze({
  RIGHT: {
    U: [GAME_CHAR.PASS, GAME_CHAR.EMPTY],
    D: [GAME_CHAR.EMPTY, GAME_CHAR.PASS],
  },
  WRONG: {
    U: [GAME_CHAR.FAIL, GAME_CHAR.EMPTY],
    D: [GAME_CHAR.EMPTY, GAME_CHAR.FAIL],
  },
});

const WORD = Object.freeze({
  ERROR: "[ERROR]",
  SUCCESS: "성공",
  FAILURE: "실패",
});

const RESULT = Object.freeze({
  MAP: "최종 게임 결과",
  TEXT: "게임 성공 여부:",
  TRIAL: "총 시도한 횟수:",
});

module.exports = { CONFIG, ENTITY, KEY, GAME_CHAR, GAME_ANSWER, WORD, RESULT };
