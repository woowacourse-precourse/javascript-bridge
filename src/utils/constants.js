const INPUT_MESSAGE = {
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  MOVING_COMMAND: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
};

const OUTPUT_MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.',
  BRIDGE_MAP: `${BRIDGE.START}| O |${BRIDGE.END}`,
};

const GAME_COMMANDS = {
  MOVING: { UP: 'U', DOWN: 'D' },
  GAME: { RETRY: 'R', QUIT: 'Q' },
};

const BRIDGE_SHAPE = {
  START: '[ ',
  END: ' ]',
  DIVIDING_LINE: ' | ',
};

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, GAME_COMMANDS, BRIDGE_SHAPE };
