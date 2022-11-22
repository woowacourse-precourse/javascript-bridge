const PRINT_MESSAGE = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.\n",
  MAP: (upBridge, downBridge) =>
    `[ ${upBridge.join(" | ")} ]\n[ ${downBridge.join(" | ")} ]\n`,
  RESULT: "최종 게임 결과\n",
  IS_SUCCESS: (isSuccess) => `게임 성공 여부: ${isSuccess}\n`,
  ATTEMPT: (attempt) => `총 시도한 횟수: ${attempt}`,
});
const REQUEST_MESSAGE = Object.freeze({
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  SELECT_MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RESTART: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
});
const ERROR_MESSAGE = Object.freeze({
  BRIDGE_SIZE_ERROR: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  MOVE_INPUT_ERROR: "[ERROR] 이동 방향은 U와 D중 하나를 입력해야 합니다.",
  RESTART_INPUT_ERROR: "[ERROR] 재시작은 'R'을, 종료는 'Q'를 입력해야 합니다.",
});

module.exports = { PRINT_MESSAGE, REQUEST_MESSAGE, ERROR_MESSAGE };
