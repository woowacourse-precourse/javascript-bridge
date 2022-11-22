const MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.\n',
  INPUT: '다리의 길이를 입력해주세요.\n',
  MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)n',
  RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  RESULT: '최종 게임 결과',
  SCORE: (result) => `게임 성공 여부: ${result}`,
  RETRY_CNT: '총 시도한 횟수: ',
};

const GAME_STATUS = {
  UP: 'U',
  DOWN: 'D',
  MIN_BOUND: 3,
  MAX_BOUND: 20,
  START: ' [',
  END: ' ]',
  LINE: ' | ',
  POSSIBLE: 'O',
  IMPOSSIBLE: 'X',
  SPACE: ' ',
};

const ERROR = {
  NOT_NUMBER: '[ERROR] 숫자만 입력 가능합니다.',
  NOT_BOUND: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  NOT_MOVE_DATA: '[ERROR] U와 D 중 하나의 문자만 입력해야 됩니다.',
};

module.exports = { MESSAGE, GAME_STATUS, ERROR };
