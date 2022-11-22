const MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.\n',
  INPUT: '다리의 길이를 입력해주세요.\n',
  MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)n',
  RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  RESULT: '최종 게임 결과',
  SCORE: '게임 성공 여부: ',
  RETRY_CNT: '총 시도한 횟수: ',
};

const GAME_STATUS = {
  UP: 'U',
  DOWN: 'D',
  MIN_BOUND: 3,
  MAX_BOUND: 20,
};

const ERROR = {
  TYPE_ERROR: '[ERROR] 숫자만 입력 가능합니다.',
  RANGE_ERROR: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
};

module.exports = { MESSAGE, GAME_STATUS, ERROR };
