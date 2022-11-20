const TEXT = {
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  MOVEMENT: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const ERROR = {
  BRIDGE_SIZE: "[ERROR] 3~20 정수 숫자여야 합니다.",
  MOVEMENT: "[ERROR] U나 D를 입력해야 합니다.",
  RESTART: "[ERROR] R나 Q를 입력해야 합니다.",
};

module.exports = {
  TEXT,
  ERROR,
};
