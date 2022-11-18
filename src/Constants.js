const KEY = {
  UP: 'U',
  DOWN: 'D',
};

const MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.',
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  MOVING_KEY: `이동할 칸을 선택해주세요. (위: ${KEY.UP}, 아래: ${KEY.DOWN})`,
};

const ERROR = {
  BRIDGE_SIZE: '[ERROR] 다리 길이는 3 이상, 20 이하의 숫자여야 합니다.',
  MOVING_KEY: `[ERROR] 이동은 (위: ${KEY.UP}, 아래: ${KEY.DOWN})로만 할 수 있습니다.`,
};

module.exports = { KEY, MESSAGE, ERROR };
