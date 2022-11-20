const GAME = {
  START: '다리 건너기 게임을 시작합니다.',
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
};

const ERROR = {
  BRIDGE_SIZE_TYPE: '[ERROR] 다리 길이는 숫자를 입력해야 합니다.',
  BRIDGE_SIZE_MIN: '[ERROR] 다리 길이는 3 이상의 수를 입력해야 합니다.',
  BRIDGE_SIZE_MAX: '[ERROR] 다리 길이는 20 이하의 수를 입력해야 합니다.',

  MOVING_UPPER: '[ERROR] 이동 칸은 대문자를 입력해야 합니다.',
  MOVING_LETTER: '[ERROR] 이동 칸은 U 혹은 D를 입력해야 합니다.',

  GAME_COMMAND_UPPER: '[ERROR] 재시작 여부는 대문자를 입력해야 합니다.',
  GAME_COMMAND_LETTER: '[ERROR] 재시작 여부는 Q 혹은 R을 입력해야 합니다.',
};

module.exports = { GAME, ERROR };
