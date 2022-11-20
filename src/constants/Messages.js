const PRINT_MESSAGE = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.",
});
const REQUEST_MESSAGE = Object.freeze({
  BRIDGE_LENGTH: "다리의 길이를 입력해주세요.",
  SELECT_MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  RESTART: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
});
const ERROR_MESSAGE = Object.freeze({
  BRIDGE_LENGTH_ERROR: "[ERROR]: 다리 길이는 3~20사이의 숫자를 입력해야합니다.",
});

module.exports = { PRINT_MESSAGE, REQUEST_MESSAGE, ERROR_MESSAGE };
