const MESSAGE = Object.freeze({
  START_NOTIFICATION: '다리 건너기 게임을 시작합니다.\n',
  ASK_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  ASK_SELECT_MOVE_POINT: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  ASK_RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const DIRECTION = Object.freeze({
  U: '1',
  D: '0',
  1: 'U',
  0: 'D',
});

const ANSWER = Object.freeze({
  RETRY: 'R',
});

module.exports = {
  MESSAGE,
  DIRECTION,
  ANSWER,
};
