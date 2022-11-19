const INPUT_MESSAGE = Object.freeze({
  ENTER_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  ENTER_MOVING: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  ENTER_GAME_COMMAND: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
});

const INPUT_ERROR = Object.freeze({
  BRIDGE_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVING: '[ERROR] 이동할 칸은 U 또는 D를 입력하여야 합니다.',
  GAME_COMMAND: '[ERROR] 게임 명령어는 R 또는 Q를 입력하여야 합니다.',
});

const BRIDGE = Object.freeze({
  MIN_SIZE: 3,
  MAX_SIZE: 20,
  UP: 'U',
  DOWN: 'D',
  RIGHT: 'O',
  WRONG: 'X',
  CREATE_ERROR: '[ERROR] 유효하지 않은 Brdige객체 생성입니다.',
});

const GAME = Object.freeze({
  RETRY: 'R',
  QUIT: 'Q',
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  INPUT_ERROR,
  BRIDGE,
  GAME,
};
