const INPUT_MESSAGE = {
  BRIDGE_LENGT: "다리의 길이를 입력해주세요.\n",
  MOVE_BRIDGE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  ASK_RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const OUTPUT_MESSAGE = {
  START: "다리 건너기 게임을 시작합니다.",
  END: "최종 게임 결과",
  RESULT: (result) => `게임 성공 여부: ${result}`,
  TRYCOUNT: (tryCount) => `총 시도한 횟수: ${tryCount}`,
};

const ERROR_MESSAGE = {
  BRIDGE_ERROR: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  STEP_ERROR: "[ERROR] U 또는 D를 입력해주세요",
  RESTART_ERROR: "[ERROR] R 또는 Q를 입력해주세요",
};

const BRIDGE_DRAWER = {
  START: "[",
  END: "]",
  CORRECT: " O ",
  WRONG: " X ",
  BAR: "|",
  NOTHING: "   ",
};
const RETRY_GAME = {
  RETRY: "R",
  QUIT: "Q",
};
const GAME_RESULT = {
  SUCCESS: "성공",
  FAIL: "실패",
};

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE,
  BRIDGE_DRAWER,
  RETRY_GAME,
  GAME_RESULT,
};
