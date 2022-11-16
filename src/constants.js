const ERROR = Object.freeze({
  BRIDGE_LENGTH_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  BRIDGE_LENGTH_TYPE: '[ERROR] 다리 길이는 숫자만 입력 가능 합니다.',
});

const GAME = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  END: '최종 게임 결과',
});

const BRIDGE = Object.freeze({
  LENGTH_MIN: 3,
  LENGTH_MAX: 20,
});

const BRIDGE_MOVEMENT = Object.freeze({
  UP: 'U',
  DOWN: 'D',
});

module.exports = {
  ERROR,
  GAME,
  BRIDGE,
  BRIDGE_MOVEMENT,
};
