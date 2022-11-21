const CONSTANT = {
  MOVE_UP: "U",
  MOVE_DOWN: "D",
  RESTART: "R",
  QUIT: "Q",
};
const ALERT = {
  GAME_START: "다리 건너기 게임을 시작합니다.\n",
  INPUT_BRIDGESIZE: "다리의 길이를 입력해주세요.\n",
  INPUT_MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  GAME_OVER: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};
const ERROR = {
  IS_NAN: "[ERROR] 숫자를 입력해야합니다.",
  OUT_OF_RANGE: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  NOT_STRING: "[ERROR] 입력값은 문자여야 합니다.",
  INVALIDATE_MOVE: "[ERROR] 잘못된 입력값입니다. (위: U, 아래: D)",
  INVALIDATE_GAME: "[ERROR] 잘못된 입력값입니다. (재시도: R, 종료: Q)",
};

module.exports = { CONSTANT, ALERT, ERROR };
