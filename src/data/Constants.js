const ERROR = Object.freeze({
  ERROR_BRIDGE_LENGTH_RANGE: `[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.`,
  ERROR_BRIDGE_LENGTH_ONLY_NUM: `[ERROR] 숫자만 입력이 가능합니다.`,

  ERROR_BRIDGE_MOVE_UPPERCASE: `[ERROR] 대문자로 입력해주세요.`,
  ERROR_BRIDGE_MOVE_RANGE: `[ERROR] U 또는 D 를 입력해주세요.`,
  ERROR_BRIDGE_MOVE_LENGTH: `[ERROR] U 또는 D 한 글자만 입력해주세요.`,

  ERROR_RETRY_UPPERCASE: `[ERROR] 대문자로 입력해주세요.`,
  ERROR_RETRY_RANGE: `[ERROR] R 또는 Q를 입력해주세요.`,
  ERROR_RETRY_LENGTH: `[ERROR] R 또는 D 한 글자만 입력해주세요.`,
});

const INPUT = Object.freeze({
  GET_INPUT_BRIDGE_SIZE: `다리 길이를 입력해주세요.\n`,
  GET_INPUT_MOVING: `이동할 칸을 선택해주세요. (위: U, 아래: D)\n`,
  GET_INPUT_GAME_COMMAND: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n`,
});

const OUTPUT = Object.freeze({
  SEND_GAME_START: `다리 건너기 게임을 시작합니다.`,
  SEND_GAME_RESULT: `최종 게임 결과\n`,
  SEND_GAME_SUCCESS_FAIL: `게임 성공 여부: `,
  SEND_GAME_TRY_COUNT: `총 시도한 횟수: `,
});

module.exports = { ERROR, INPUT, OUTPUT };
