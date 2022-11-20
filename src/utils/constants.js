const INPUT_MESSAGE = {
  LENGTH: "다리의 길이를 입력해주세요.\n",
  MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  GAME_OVER: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const INFO_MESSAGE = {
  START: "다리 건너기 게임을 시작합니다.\n",
  SUCCESS: "게임 성공 여부: 성공",
  FAIL: "게임 성공 여부: 실패",
  TRY: (tried) => `총 시도한 횟수: ${tried}`,
  RESULT: "최종 게임 결과",
};

const ERROR_MESSAGE = {
  BRIDGE_LENGTH: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  UP_OR_DOWN: "[ERROR] 이동 방향은 U 또는 D 만 선택 가능 합니다.",
  RETRY_OR_QUIT: "[ERROR] 게임 실행 여부는 R 또는 Q 만 선택 가능 합니다.",
};

const BRIDGE = {
  ZERO: "0",
  UP: "U",
  DOWN: "D",
  RETRY: "R",
  QUIT: "Q",
  MOVABLE: " O ",
  IMMOVABLE: " X ",
  UNSELECTED: "   ",
  MIN_LENGTH: 3,
  MAX_LENGTH: 20,
};

module.exports = { INPUT_MESSAGE, INFO_MESSAGE, ERROR_MESSAGE, BRIDGE };
