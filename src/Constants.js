const GAME_MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.\n',
  LENGTH: '다리의 길이를 입력해주세요.\n',
  MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RESTART: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  RESULT: '최종 게임 결과',
  SUCCESS: (isSuccess) => `게임 성공 여부: ${isSuccess ? '성공' : '실패'}`,
  NUMBER_OF_TIMES: (number) => `총 시도한 횟수: ${number}`,
};

const ERROR_MESSAGE = {
  INTEGER: '[ERROR] 다리 길이는 양의 정수여야 합니다.',
  DOMAIN: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVING: `[ERROR] 이동할 수 있는 칸은 'U' 또는 'D'여야 합니다.`,
  GAME_COMMAND: `[ERROR] 게임 커멘드는 'R' 또는 'Q'여야 합니다.`,
};

const CONDITION = {
  NOT_INTEGER: (answer) => /[^0-9]/.test(answer),
  INVALID_DOMAIN: (answer) => answer < 3 || answer > 20,
  INVALID_MOVING: (answer) => answer !== 'U' && answer !== 'D',
  INVALID_GAME_COMMAND: (answer) => answer !== 'R' && answer !== 'Q',
};

module.exports = { CONDITION, ERROR_MESSAGE, GAME_MESSAGE };
