const INPUT_MESSAGE = Object.freeze({
  ENTER_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  ENTER_MOVING: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
});

const INPUT_ERROR = Object.freeze({
  BRIDGE_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVING: '[ERROR] 이동할 칸은 U 또는 D를 입력하여야 합니다.',
});

const BRIDGE = Object.freeze({
  MIN_SIZE: 3,
  MAX_SIZE: 20,
  UP: 'U',
  DOWN: 'D',
  CREATE_ERROR: '[ERROR] 유효하지 않은 Brdige객체 생성입니다.',
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  INPUT_ERROR,
  BRIDGE,
};
