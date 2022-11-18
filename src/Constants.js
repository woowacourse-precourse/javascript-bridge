const KEY = {
  UP: 'U',
  DOWN: 'D',
  RETRY: 'R',
  END: 'Q',
};

const MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.',
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  MOVING_KEY: `이동할 칸을 선택해주세요. (위: ${KEY.UP}, 아래: ${KEY.DOWN})`,
  GAME_COMMAND: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${KEY.RETRY}, 종료: ${KEY.END})`,
  RESULT: '최종 게임 결과',
};

const ERROR = {
  BRIDGE_SIZE: '[ERROR] 다리 길이는 3 이상, 20 이하의 숫자여야 합니다.',
  MOVING_KEY: `[ERROR] 이동은 (위: ${KEY.UP}, 아래: ${KEY.DOWN})로만 할 수 있습니다.`,
  GAME_COMMAND: `[ERROR] 입력은 (재시도: ${KEY.RETRY}, 종료: ${KEY.END})로만 할 수 있습니다.`,
};

module.exports = { KEY, MESSAGE, ERROR };
