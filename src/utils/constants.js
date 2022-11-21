const PRINT_MESSAGE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.\n',
  BRIDGE_LENGTH: '다리의 길이를 입력해주세요.\n',
  BRIDGE_TO_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  GAME_RESULT: '최종 게임 결과',
  SUCCESS_OR_FAILURE: `게임 성공 여부: `,
  TRY_COUNT: `총 시도한 횟수: `,
});

const ERROR_MESSAGE = Object.freeze({
  VALIDATION_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  VALIDATION_MOVE: "[ERROR] 이동할 칸은 'U' 또는 'D'여야 합니다.",
  VALIDATION_RETRY_OR_QUIT: "[ERROR] 재시도는 'R' 종료는 'Q'를 입력하세요.",
});

const BRIDGE_RULE = Object.freeze({
  MIN_LENGTH: 3,
  MAX_LENGTH: 20,
  MOVE_UP: 'U',
  MOVE_DOWN: 'D',
  RETRY: 'R',
  QUIT: 'Q',
});

const RESULT = Object.freeze({
  FAILURE: '실패',
  SUCCESS: '성공',
});

module.exports = {
  PRINT_MESSAGE,
  ERROR_MESSAGE,
  BRIDGE_RULE,
  RESULT,
};
