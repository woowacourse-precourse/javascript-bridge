const NUMBER = Object.freeze({
  MIN_BRIDGE_SIZE: 3,
  MAX_BRIDGE_SIZE: 20,
});

const DIRECTION = Object.freeze({
  UP: 'U',
  DOWN: 'D',
});

const MESSAGE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.\n',
  INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVE_DIRECTION: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
});

const ERROR = Object.freeze({
  BRIDGE_SIZE: `[ERROR] 다리 길이는 ${NUMBER.MIN_BRIDGE_SIZE}부터 ${NUMBER.MAX_BRIDGE_SIZE} 사이의 숫자여야 합니다.\n`,
  BRIDGE_DIRECTION: '[ERROR] 위는 U, 아래는 D를 입력해주세요.\n',
});

module.exports = {
  NUMBER,
  DIRECTION,
  MESSAGE,
  ERROR,
};
