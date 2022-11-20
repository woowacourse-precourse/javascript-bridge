INPUT_BRIDGE_LENGTH = "다리의 길이를 입력해주세요.\n";
INPUT_MOVE = "이동할 칸을 선택해 주세요. (위: U, 아래: D)\n";
CONSOLE_MESSAGE = {
  INPUT_BRIDGE_LENGTH,
  INPUT_MOVE,
};

NOT_RIGHT_BRIDGE_LENGTH =
  "[ERROR] 다리의 길이는 3부터 20까지 입력하실 수 있습니다.";
NOT_RIGHT_MOVE = "[ERROR] U 또는 D를 입력해주세요";
ERROR_MESSAGE = {
  NOT_RIGHT_BRIDGE_LENGTH,
  NOT_RIGHT_MOVE,
};

module.exports = { CONSOLE_MESSAGE, ERROR_MESSAGE };
