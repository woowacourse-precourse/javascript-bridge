const INPUT = {
  MSG: {
    BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
    MOVE: "\n이동할 칸을 입력해주세요. (위: U, 아래: D)\n",
    GAME_END:
      "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  },
  INPUT_ERR: {
    CONTROL_ERR: "게임 재시도/종료 여부는 R(재시도) 혹은 Q(종료) 여야 합니다.",
    DIRECTION_ERR: "입력은 U(위) 혹은 D(아래) 여야 합니다.",
    NO_NUM: "다리 길이는 숫자여야 합니다.",
    NO_RANGE: "다리 길이는 3이상 20이하여야 합니다.",
  },
  COMMAND: {
    RETRY: "R",
    QUIT: "Q",
  },
};
module.exports = INPUT;
