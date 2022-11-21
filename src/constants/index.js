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

const COMMAND_VALUE = Object.freeze({
  RESTART: "R",
  QUIT: "Q",
});

const GAME_MESSAGE = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.",
  INPUT_BRIDGE_LENGTH: "다리의 길이를 입력해주세요.",
  INPUT_MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  RESTART: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
  RESULT: "최종 게임 결과",
  SUCCESS_STATUS: (status) => `게임 성공 여부: ${status ? "성공" : "실패"}`,
});

const ERROR_MESSAGE = Object.freeze({
  PREFIX: "[ERROR] ",
  EMPTY_ERROR: "공백이 아닌 값을 입력해주세요.",
  TYPE_ERROR: "숫자를 입력해주세요.",
  RANGE_ERROR: "3~20 범위의 값만 입력해주세요.",
  ALPHABET_ERROR: (option1, option2) =>
    `${option1} 또는 ${option2} 값만 입력해주세요.`,
});

module.exports = {
  BRIDGE_VALUE,
  MOVE_VALUE,
  COMMAND_VALUE,
  GAME_MESSAGE,
  ERROR_MESSAGE,
};
