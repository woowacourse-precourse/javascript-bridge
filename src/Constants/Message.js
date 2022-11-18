const INPUT_MSG = {
  BRIDGESIZE: "다리의 길이를 입력해주세요.\n",
  MOVING: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  GAMECOMMAND:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const ERROR_MSG = {
  INPUT_BRIDGE: "다리 길이는 3이상 20이하만 가능합니다.",
  INPUT_MOVING: "U랑 D만 입력할수있습니다. ",
  INPUT_GAMECOMMAND: "Q랑 R만 입력할수있습니다. ",
};

const GAME_MSG = {
  START: "다리 건너기 게임을 시작합니다.\n",
  END: "최종 게임 결과",
  PRINT_RESULT: "게임 성공 여부: ",
  TRUE: "성공",
  FALSE: "실패",
  TOTAL_TRY: "총 시도한 횟수: ",
};

module.exports = { INPUT_MSG, ERROR_MSG, GAME_MSG };
