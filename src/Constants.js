const GAME_MESSAGES = Object.freeze({
  START_GAME: "다리 건너기 게임을 시작합니다.\n",
  ASK_TO_BRIDGE_LENGTH: "다리의 길이를 입력해주세요.\n",
  ASK_TO_MOVE_BLOCKS: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  ASK_OPINION_FOR_RESTART: "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
});

const RESULT_MESSAGES = Object.freeze({
  PRINT_END_GAME: "\n최종 게임 결과",
  PRINT_MAP: (direction) => `[${direction}]`,
  PRINT_COUNT: (count) => `\n총 시도한 횟수: ${count}`,
  PRINT_SUCCESS_OR_FAILURE: (status) => `게임 성공 여부: ${status}`,
});

const ERROR_MESSAGES = Object.freeze({
  SIZE_INPUT_TYPE: "[ERROR] 다리 길이는 숫자로 입력해야 합니다.",
  SIZE_INPUT_RANGE: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  DIRECTION_INPUT_TYPE: "[ERROR] 이동 경로는 U 아님 D로 입력해야 합니다.",
  RETRY_COMMAND_TYPE: "[ERROR] 재시작은 R, 게임 종료는 Q를 눌러주세요",
});

const BLOCK = Object.freeze({
  FIRST_BLOCK: (item) => ` ${item} `,
  NOT_FIRST_BLOCK: (item) => `| ${item} `,
});

const SIGN = Object.freeze({
  TOTAL_DIRECTION: 2,
  UP_DIRECTION_SIGN: "U",
  DOWN_DIRECTION_SIGN: "D",
  BLANK_SIGN: " ",
  SUCCESS_SIGN: "O",
  FAILURE_SIGN: "X",
  SUCCESS: "성공",
  FAILURE: "실패",
});

module.exports = { GAME_MESSAGES, RESULT_MESSAGES, ERROR_MESSAGES, BLOCK, SIGN };
