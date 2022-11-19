const INPUT = {
  GET_SIZE: "\n다리의 길이를 입력해주세요.\n",
  GET_MOVING: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  GET_RETRY:
    "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const OUTPUT = {
  START: "다리 건너기 게임을 시작합니다.",
  RESULT: "최종 게임 결과",
  printSuccessResult(result) {
    const resultString = result ? "성공" : "실패";
    return `\n게임 성공 여부: ${resultString}`;
  },
  printTrialResult(trial) {
    return `총 시도한 횟수: ${trial}`;
  },
};

const BRIDGE = {
  SIZE_MIN: 3,
  SIZE_MAX: 20,
  1: "U",
  0: "D",
};
const MOVING = {
  U: 1,
  D: 0,
};
const MAP = {
  UPPER: "U",
  LOWER: "L",
  WRAPPER_LEFT: "[",
  WRAPPER_RIGHT: "]",
  DIVIDER: "|",
  [true]: "O",
  [false]: "X",
  NONE: " ",
};

const RETRY = {
  R: true,
  Q: false,
};

module.exports = {
  INPUT,
  OUTPUT,
  BRIDGE,
  MOVING,
  MAP,
  RETRY,
};
