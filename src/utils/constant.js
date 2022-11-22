const DEFAULT = Object.freeze({
  ZERO: 0,
  EMPTY_ARRAY: [],
  EMPTY_STRING: "",
  ONE: 1,
  TRUE: true,
  FALSE: false,
  MIN_BRIDGE_NUM: 3,
  MAX_BRIDGE_NUM: 20,
  UP: "U",
  DOWN: "D",
  RETRY: "R",
  QUIT: "Q",
  END: "E",
  MOVE: "M",
});

const INPUT_VIEW_COMMENT = Object.freeze({
  INPUT_BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  INPUT_DIRECTION: "이동할 칸을 선택해주세요. (위:U, 아래:D)\n",
  INPUT_COMMAND:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
});

const OUTPUT_VIEW_VALUE = Object.freeze({
  FIRST_EMPTY: "   ",
  FIRST_WRONG: " X ",
  FIRST_RIGHT: " O ",
  EMPTY: "|   ",
  RIGHT: "| O ",
  WRONG: "| X ",
  START_GAME: "다리 건너기 게임을 시작합니다.\n",
  RESULT_COMMENT: "게임 성공 여부",
  END_COMMENT: "최종 게임 결과",
  COUNT_COMMENT: "총 시도한 횟수",
  SUCCESS: "성공",
  FAIL: "실패",
});

const ERROR = Object.freeze({
  BRIDGE_IS_NUMBER_ERROR: "[ERROR] 숫자만 입력 가능합니다.",
  BRIDGE_RANGE_ERROR: "[ERROR] 3 ~ 20사이의 숫자만 입력 가능합니다.",
  DIRECTION_INPUT_ERROR: "[ERROR] U 또는 D만 입력 가능합니다.",
  CONTINUE_INPUT_ERROR: "[ERROR] R 또는 Q만 입력 가능합니다.",
});

module.exports = {
  DEFAULT,
  OUTPUT_VIEW_VALUE,
  ERROR,
  INPUT_VIEW_COMMENT,
};
