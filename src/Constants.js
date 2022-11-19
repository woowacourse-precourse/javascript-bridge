const MESSAGE = {
  START: "다리 건너기 게임을 시작합니다.\n",
  END: "최종 게임 결과",
  INPUT_LENGTH: "다리의 길이를 입력해주세요.\n",
  INPUT_MOVING: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  INPUT_GAME_COMMAND:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q\n",
  RESULT: "게임 성공 여부: ",
  TOTAL_ATTEMPTS: "총 시도한 횟수: ",
};

const UNIT = {
  UP: "U",
  DOWN: "D",
  POSSIBLE_NUM: 1,
  IMPOSSIBLE_NUM: 0,
  POSSIBLE_SIGN: "O",
  IMPOSSIBLE_SIGN: "X",
};

module.exports = { MESSAGE, UNIT };
