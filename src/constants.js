const MESSAGE = {
  SIZE: "다리의 길이를 입력해주세요.\n",
  MOVING: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  COMMAND: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const ERROR = {
  NUMBER: "[ERROR] 다리 길이는 숫자여야 합니다.",
  RANGE: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  MOVING: "[ERROR] 대문자 U와 D만 입력가능합니다.",
  COMMAND: "[ERROR] 게임 진행 옵션은 R과 Q만 입력할 수 있습니다.",
};

module.exports = { MESSAGE, ERROR };
