const Message = Object.freeze({
  GAME_START: "다리 건너기 게임을 시작합니다.",
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  BRIDGE_DIRECTION: "이동할 칸을 선택해주세요. (위: U, 아래: D)",

  ERROR: {
    PREFIX: "[ERROR]",
    MINLENGT: "다리 길이는 3 이상이어야 합니다.",
    MAXLENGT: "다리 길이는 20 이하 이어야 합니다.",
    NUMBER: "숫자(정수)를 입력해야 합니다.",
    DIRECTION:"위쪽 다리는 U 아래쪽 다리는 D 로 선택 할 수 있습니다."
  },
});

module.exports = Message;
