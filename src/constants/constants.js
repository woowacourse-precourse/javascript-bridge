const SAYS = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.",
});

const ASKS = Object.freeze({
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.",
  PLAYER_MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  AGAIN: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
});

const THROWS = Object.freeze({
  TYPE_NUMBER: "[ERROR] 타입이 넘버가 아님",
});

module.exports = { SAYS, ASKS, THROWS };
