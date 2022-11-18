const VALUES = Object.freeze({
  UPPER_BRIDGE_INDEX: 0,
  LOWER_BRIDGE_INDEX: 1,

  INITIAL_GAME_ROUND: 0,
  INITIAL_TRIAL_NUMBER: 1,

  BRIDGE_SIZE_MIN: 3,
  BRIDGE_SIZE_MAX: 20,

  VALID_INPUT_LENGTH_MOVE: 1,
  VALID_INPUT_LENGTH_COMMAND: 1,
  VALID_INPUT_LENGTH_BRIDGE_SIZE_MIN: 1,
  VALID_INPUT_LENGTH_BRIDGE_SIZE_MAX: 2,
});

const GAME_UTILS = Object.freeze({
  MARK_CORRECT_MOVE: "O",
  MARK_WRONG_MOVE: "X",
  MARK_UNCHOSEN_BRIDGE: " ",

  COMMAND_UPWARD: "U",
  COMMAND_DOWNWARD: "D",
  COMMAND_RESTART: "R",
  COMMAND_QUIT: "Q",

  GAME_RESULT_WIN: "성공",
  GAME_RESULT_LOSE: "실패",
});

const MESSAGES_INPUT = Object.freeze({
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  COMMAND: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
});

const MESSAGES_RESULT = Object.freeze({
  TITLE: "최종 게임 결과",
  WIN_OR_NOT: "게임 성공 여부: ",
  TOTAL_TRIALS: "총 시도한 횟수: ",
});

const MESSAGES_ERROR = Object.freeze({
  BRIDGE_SIZE_NOT_NUMBER: "[ERROR] 숫자를 입력해주세요.",
  BRIDGE_SIZE_INPUT_LENGTH: "[ERROR] 숫자의 자릿수는 1 또는 2여야 합니다.",
  BRIDGE_SIZE_NOT_IN_RANGE: "[ERROR] 다리 길이는 3부터 20 사이의 수여야 합니다.",

  MOVE_NOT_VALID_LETTER: "[ERROR] 입력이 D 또는 U가 아닙니다.",
  MOVE_INPUT_LENGTH: "[ERROR] 문자는 하나만 입력해주세요.",

  COMMAND_NOT_VALID_LETTER: "[ERROR] 입력이 Q 또는 R이 아닙니다.",
  COMMAND_INPUT_LENGTH: "[ERROR] 문자는 하나만 입력해주세요.",
});

module.exports = { VALUES, GAME_UTILS, MESSAGES_INPUT, MESSAGES_RESULT, MESSAGES_ERROR };
