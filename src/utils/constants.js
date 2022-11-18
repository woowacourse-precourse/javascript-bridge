const MANAGER = Object.freeze({
  NOTICE_START: "다리 건너기 게임을 시작합니다.",
  ASK_BRIDGE_SIZE: "다리의 길이를 입력해주세요.",
  ASK_MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  ASK_RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
});

const SIZE = Object.freeze({
  MIN: 3,
  MAX: 20,
});

const ORDER = Object.freeze({
  UP: "U",
  DOWN: "D",
});

const SPACE = Object.freeze({
  U: 0,
  D: 1,
});

const PASS = Object.freeze({
  true: "O",
  false: " ",
});

const FAIL = Object.freeze({
  true: " ",
  false: "X",
});

const ERROR = Object.freeze({
  BRIDGE_SIZE: "[ERROR] 3~20 사이의 숫자만 입력 가능합니다. 다시 입력해주세요.",
  MOVE_ORDER:
    "[ERROR] 위: U, 아래: D 두 방향키에 대한 입력만 가능합니다. 다시 입력해주세요.",
});

module.exports = { MANAGER, SIZE, ORDER, SPACE, PASS, FAIL, ERROR };
