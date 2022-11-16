const ERROR = Object.freeze({
  BRIDGE_SIZE_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  BRIDGE_SIZE_TYPE: '[ERROR] 다리 길이는 숫자만 입력 가능 합니다.',
});

const GAME = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  END: '최종 게임 결과',
});

const INPUT = Object.freeze({
  ASK_BRIDGE_SIZE: "\n다리의 길이를 입력해주세요.",
  ASK_MOVEMENT: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)",
  ASK_RETRY: "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
});

const BRIDGE = Object.freeze({
  SIZE_MIN: 3,
  SIZE_MAX: 20,
});

const BRIDGE_MOVEMENT = Object.freeze({
  UP: 'U',
  DOWN: 'D',
});

module.exports = {
  ERROR,
  GAME,
  INPUT,
  BRIDGE,
  BRIDGE_MOVEMENT,
};
