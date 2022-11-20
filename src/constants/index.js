const BRIDGE_VALUE = Object.freeze({
  MIN: 3,
  MAX: 20,
});

const MOVE_VALUE = Object.freeze({
  UP: "U",
  DOWN: "D",
  VALID: "O",
  INVALID: "X",
});

const GAME_MESSAGE = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.",
  INPUT_BRIDGE_LENGTH: "다리의 길이를 입력해주세요.",
  INPUT_MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
});

const ERROR_MESSAGE = Object.freeze({
  PREFIX: "[ERROR] ",
  EMPTY_ERROR: "공백이 아닌 값을 입력해주세요.",
  TYPE_ERROR: "숫자를 입력해주세요.",
  RANGE_ERROR: "3~20 범위의 값만 입력해주세요.",
  ALPHABET_ERROR: "U 또는 D 값만 입력해주세요.",
});

module.exports = { BRIDGE_VALUE, MOVE_VALUE, GAME_MESSAGE, ERROR_MESSAGE };
