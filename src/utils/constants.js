const PRINT_MESSAGE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  BRIDGE_LENGTH: '다리의 길이를 입력해주세요.',
  BRIDGE_TO_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  GAME_RESULT: `게임 성공 여부: `,
  TRY_COUNT: `총 시도한 횟수: `,
});

const ERROR_MESSAGE = Object.freeze({
  VALIDATION_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  VALIDATION_MOVE: "[ERROR] 이동할 칸은 'U' 또는 'D'여야 합니다.",
});

const REGEX_NUM = Object.freeze(/^[0-9]+$/);

const BRIDGE_RULE = Object.freeze({
  MIN_LENGTH: 3,
  MAX_LENGTH: 20,
  MOVE_UP: 'U',
  MOVE_DOWN: 'D',
});

module.exports = {
  PRINT_MESSAGE,
  ERROR_MESSAGE,
  REGEX_NUM,
  BRIDGE_RULE,
};
