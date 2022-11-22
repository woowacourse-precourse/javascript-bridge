/* eslint-disable max-len */
const NUMBER = Object.freeze({
  MIN_BRIDGE_SIZE: 3,
  MAX_BRIDGE_SIZE: 20,
});

const DIRECTION = Object.freeze({
  UP: 'U',
  DOWN: 'D',
});

const MOVABLE = Object.freeze({
  MOVABLE: 'O',
  IMMOVABLE: 'X',
});

const GAME_COMMAND = Object.freeze({
  RETRY: 'R',
  QUIT: 'Q',
});

const MESSAGE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.\n',
  INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVE_DIRECTION: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  EXIT: '최종 게임 결과',
  IS_SUCCESS: '게임 성공 여부:',
  COUNT_TRY: '총 시도한 횟수:',
  SUCCESS: '성공',
  FAIL: '실패',
});

const ERROR = Object.freeze({
  BRIDGE_SIZE: `[ERROR] 다리 길이는 ${NUMBER.MIN_BRIDGE_SIZE}부터 ${NUMBER.MAX_BRIDGE_SIZE} 사이의 숫자여야 합니다.\n`,
  BRIDGE_DIRECTION: '[ERROR] 위는 U, 아래는 D를 입력해주세요.\n',
  RETRY_COMMAND: '[ERROR] 재시도는 Q, 종료는 R을 입력해주세요.\n',
});

module.exports = {
  NUMBER,
  MOVABLE,
  DIRECTION,
  GAME_COMMAND,
  MESSAGE,
  ERROR,
};
