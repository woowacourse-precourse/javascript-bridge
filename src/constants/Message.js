const SAYS = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.",
  RESULT: (result, count) =>
    `최종 게임 결과\n${result.map}\n\n게임 성공 여부: ${result.text}\n총 시도한 횟수: ${count}`,
});

const ASKS = Object.freeze({
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.",
  PLAYER_MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  AGAIN: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
});

const ABOUT = Object.freeze({
  TYPE_NUMBER: "[ERROR] 입력 타입은 숫자여야 합니다.",
  NUMBER_RANGE: "[ERROR] 입력 숫자 범위는 3 ~ 20이어야 합니다.",

  BRIDGE_SIZE:
    "[ERROR] 입력한 다리 size와 생성된 다리 길이가 일치하지 않습니다.",
  BRIDGE_ELEMENT: "[ERROR] 다리 요소는 'U' 혹은 'D' 여야 합니다.",
});

module.exports = { SAYS, ASKS, ABOUT };
