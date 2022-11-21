const NUMBER = Object.freeze({
  MIN_BRIDGE_SIZE: 3,
  MAX_BRIDGE_SIZE: 20,
});

const MESSAGE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
});

const ERROR = Object.freeze({
  BRIDGE_SIZE: `[ERROR] 다리 길이는 ${NUMBER.MIN_BRIDGE_SIZE} 이상 ${NUMBER.MAX_BRIDGE_SIZE} 이하의 숫자를 입력해주세요.`,
});

module.exports = {
  MESSAGE,
  ERROR,
};
