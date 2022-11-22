const SUCCESS = '성공';
const FAIL = '실패';
const CROSS_OR_NOT = Object.freeze({
  YES: ' O ',
  NO: ' X ',
  NOTHING: '   ',
});

const UP = 'U';
const DOWN = 'D';
const RETRY = 'R';
const QUIT = 'Q';
const BRIDGE_SIZE_RANGE = Object.freeze({
  MIN: 3,
  MAX: 20,
});

const INPUT_MESSAGE = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요. \n',
  MOVING: '\n이동할 칸을 선택해주세요. (위: U, 아래: D) \n',
  COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q) \n',
});

const OUTPUT_MESSAGE = Object.freeze({
  START_GAME: '다리 건너기 게임을 시작합니다.\n',
  TOTAL_GAME_RESULT: '\n최종 게임 결과',
  SUCCESS_OR_NOT_AND_TOTAL_ATTEMPTS(successOrNot, attempts) {
    return `게임 성공 여부: ${successOrNot} \n총 시도한 횟수: ${attempts}`;
  },
});

const ERROR_MESSAGE = Object.freeze({
  SIZE_NUMBER_ERROR: '[ERROR] 다리 길이는 숫자여야 합니다.\n',
  SIZE_RANGE_ERROR: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
  MOVING_ERROR: '[ERROR] U 또는 D 중 한 문자만 입력해주세요.\n',
  COMMAND_ERROR: '[ERROR] R 또는 Q 중 한 문자만 입력해주세요.\n',
});

module.exports = { SUCCESS, FAIL, CROSS_OR_NOT, RETRY, QUIT, UP, DOWN, INPUT_MESSAGE, ERROR_MESSAGE, BRIDGE_SIZE_RANGE, OUTPUT_MESSAGE };
