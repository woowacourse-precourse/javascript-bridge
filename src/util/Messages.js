const OUTPUT_MESSAGE = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.",
  MAP: (upBridge, downBridge) =>
    `[ ${upBridge.join(" | ")} ]\n[ ${downBridge.join(" | ")} ]\n`,
  END: "최종 게임 결과",
  IS_SUCCESS: (isSuccess) => `게임 성공 여부: ${isSuccess}`,
  COUNT: (count) => `총 시도한 횟수: ${count}`,
});

const OPTION_MESSAGE = Object.freeze({
  LENGTH: "다리의 길이를 입력해주세요.",
  MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  REGAME: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
});

const ERROR_MESSAGE = Object.freeze({
  LENGTH_ERROR: "[ERROR] 다리 길이는 3 ~ 20 사이의 숫자를 입력해야 합니다.",
  MOVE_ERROR: "[ERROR] 이동할 칸 입력은 U와 D중 하나만 입력해야 합니다.",
  RESTART_ERROR: "[ERROR] 재시작은 'R'을, 종료는 'Q'를 입력해야 합니다. ",
});

module.exports(OUTPUT_MESSAGE, OPTION_MESSAGE, ERROR_MESSAGE);
