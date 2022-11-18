const BRIDGE_SIZE = Object.freeze({
  MAX: 20,
  MIN: 3,
});

const MESSAGE = Object.freeze({
  START_NOTIFICATION: '다리 건너기 게임을 시작합니다.\n',
  ASK_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  ASK_SELECT_MOVE_POINT: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  ASK_RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  RESULT_NOTIFICATION: '최종 게임 결과',
  NUMBER_OF_ATTEMPTS: '총 시도한 횟수: ',
  SUCCESS: '성공',
  FAILURE: '실패',
  clear: (isSuccess) => `게임 성공 여부: ${isSuccess ? '성공' : '실패'}`,
  state: (row, idx) => `[ ${row.join(' | ')} ]${idx ? '\n' : ''}`,
  numberOfAttempts: (number) => `총 시도한 횟수: ${number}`,
});

const EXCEPTION_MESSAGE = Object.freeze({
  COMMAND: '[ERROR] 대문자 R 과 Q 중 하나를 입력해야 합니다.',
  BLANK: '[ERROR] 입력에 공백을 포함시킬 수 없습니다.',
  DIRECTION: '[ERROR] 대문자 U 와 D 중 하나를 입력해야 합니다.',
  NUMBER: '[ERROR] 다리 길이는 정수여야 합니다.',
  SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
});

const DIRECTION = Object.freeze({
  U: 1,
  D: 0,
  1: 'U',
  0: 'D',
});

const COMMAND = Object.freeze({
  UP: 'U',
  DOWN: 'D',
  RETRY: 'R',
  QUIT: 'Q',
});

const CAN_NOT_INCLUDES = ' ';

module.exports = {
  MESSAGE,
  DIRECTION,
  COMMAND,
  EXCEPTION_MESSAGE,
  CAN_NOT_INCLUDES,
  BRIDGE_SIZE,
};
