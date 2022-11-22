const CONFIG = Object.freeze({
  BRIDGE_START: 3,
  BRIDGE_END: 20,
  SET_DOWN: 0,
  SET_UP: 1,
});

const ENTITY = Object.freeze({
  NEW_LINE: "\n",
});

const KEY = Object.freeze({
  BRIDGE_UP: "U",
  BRIDGE_DOWN: "D",
  COMMAND_RESTART: "R",
  COMMAND_QUIT: "Q",
});

const GAME_CHAR = Object.freeze({
  PASS: "O",
  FAIL: "X",
  EMPTY: " ",
  MAP_START: "[",
  MAP_END: "]",
  MAP_DIVIDER: " | ",
});

const SINGLE_MAP = Object.freeze({
  O_PRINT: {
    U: [GAME_CHAR.PASS, GAME_CHAR.EMPTY],
    D: [GAME_CHAR.EMPTY, GAME_CHAR.PASS],
  },
  X_PRINT: {
    U: [GAME_CHAR.FAIL, GAME_CHAR.EMPTY],
    D: [GAME_CHAR.EMPTY, GAME_CHAR.FAIL],
  },
});

const WORD = Object.freeze({
  ERROR: "[ERROR]",
  SUCCESS: "성공",
  FAILURE: "실패",
  O_PRINT: "O_PRINT",
  X_PRINT: "X_PRINT",
});

const RESULT = Object.freeze({
  TITLE: `${ENTITY.NEW_LINE}최종 게임 결과`,
  TEXT: "게임 성공 여부: ",
  TRIAL: "총 시도한 횟수: ",
});

module.exports = { CONFIG, ENTITY, KEY, GAME_CHAR, SINGLE_MAP, WORD, RESULT };
