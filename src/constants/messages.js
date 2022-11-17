const INPUT_MESSAGE = {
  BRIDGE_LENGT: "다리의 길이를 입력해주세요.\n",
  MOVE_BRIDGE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  ASK_RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const ERROR_MESSAGE = {
  BRIDGE_ERROR: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  STEP_ERROR: "[ERROR] U 또는 D를 입력해주세요",
  RESTART_ERROR: "[ERROR] R 또는 Q를 입력해주세요",
};

module.exports = { INPUT_MESSAGE, ERROR_MESSAGE };
