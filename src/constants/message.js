const GAME_MSG = {
  start: "다리 건너기 게임을 시작합니다.",
};

const REQUEST_MSG = {
  bridgeSize: "\n다리의 길이를 입력해주세요.\n",
  movingDirection: `\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n`,
  checkretry:
    "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const ERROR = {
  invalidInputRange: "\n[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  invalidDirection: "\n[ERROR] 이동할 칸은 위: U, 아래: D로 입력해야 합니다.",
  inValidTrigger: "\n[ERROR]  재시작은 재시작: R, 그만: Q로 입력해야 합니다.",
};

module.exports = {
  GAME_MSG,
  REQUEST_MSG,
  ERROR,
};
