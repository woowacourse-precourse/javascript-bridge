const BRIDGE_VALUE = Object.freeze({
  MIN: 3,
  MAX: 20,
});

const GAME_MESSAGE = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.",
  INPUT_BRIDGE_LENGTH: "다리의 길이를 입력해주세요.",
});

const ERROR_MESSAGE = Object.freeze({
  EMPTY_ERROR: "[ERROR] 공백이 아닌 값을 입력해주세요.",
  TYPE_ERROR: "[ERROR] 숫자를 입력해주세요.",
  RANGE_ERROR: "[ERROR] 3~20 범위의 값만 입력해주세요.",
});

module.exports = { BRIDGE_VALUE, GAME_MESSAGE, ERROR_MESSAGE };
