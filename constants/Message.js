const MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.\n',
  READ_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  READ_MOVE: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RETRY: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  RESULT: '\n최종 게임 결과\n',
  CONDITION: '\n게임 성공 여부: ',
  TRY_COUNT: '총 시도한 횟수: ',
  SUCCESS: '성공',
  FAIL: '실패',

  ERROR_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  ERROR_NUMBER: '[ERROR] 숫자를 넣어주세요.',
  ERROR_INTEGER: '[ERROR] 정수를 넣어주세요.',
  ERROR_DIRECTION: '[ERROR] 올바른 방향이 아닙니다. (위: U, 아래: D)',
  ERROR_CONTROL: '[ERROR] 올바른 방향이 아닙니다. (위: U, 아래: D)',
};

const COMMAND = {
  UP: 'U',
  DOWN: 'D',
  RETRY: 'R',
  QUIT: 'Q',
};

const CONSTANTS = {
  MIN_BRIDGE_SIZE: 3,
  MAX_BRIDGE_SIZE: 20,
  START_INDEX: 0,
  TRY_COUNT: 1,
};

module.exports = { MESSAGE, COMMAND, CONSTANTS };
