const MANAGER = Object.freeze({
  NOTICE_START: "다리 건너기 게임을 시작합니다.",
  ASK_BRIDGE_SIZE: "다리의 길이를 입력해주세요.",
});

const SIZE = Object.freeze({
  MIN: 3,
  MAX: 20,
});

const ERROR = Object.freeze({
  BRIDGE_SIZE: "[ERROR] 3~20 사이의 숫자만 입력 가능합니다.",
});

module.exports = { MANAGER, SIZE, ERROR };
