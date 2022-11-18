const CONSOLE_MESSAGE = {
  start: "다리 건너기 게임을 시작합니다.\n",
  enterSize: "다리의 길이를 입력해주세요.\n",
  choice: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
};

const ERROR_MESSAGE = {
  sizeInteger: "[ERROR] 다리 길이가 정수 타입이 아닙니다.",
  sizeRange: "[ERROR] 다리 길이가 범위를 벗어납니다.",
  choice: "[ERROR] 올바르지 못한 칸 입력입니다.",
};

const PROCCESS_MESSAGE = {
  pathByNumber: "[ERROR] 올바르지 못한 수가 인자로 전달되었습니다.",
};

module.exports = { CONSOLE_MESSAGE, ERROR_MESSAGE, PROCCESS_MESSAGE };
