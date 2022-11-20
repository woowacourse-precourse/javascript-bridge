const GAME_CONDITION = Object.freeze({
  MIN_BRIDGE_LENGTH: 3,
  MAX_BRIDGE_LENGTH: 20,
  RANDOM_BRIDGE_NUMBER: {
    0: "D",
    1: "U",
  },
});

const GAME_MESSAGE = Object.freeze({
  START_GAME: "다리 건너기 게임을 시작합니다.",
  INPUT_BRIDGE_LENGTH: "다리의 길이를 입력해주세요.",
});

const ERROR_MESSAGE = Object.freeze({
  ERROR_PREFIX: "[ERROR] ",
  INPUT_SIZE_NOT_NUMBER: "다리 길이는 숫자값이어야 합니다.",
  INPUT_SIZE_NOT_IN_RANGE: "다리 길이는 3 이상 20 이하여야 합니다.",
});

module.exports = { GAME_CONDITION, GAME_MESSAGE, ERROR_MESSAGE };
