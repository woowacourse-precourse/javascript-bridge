const CONSTANT = {
  DIRECTION: {
    UP: 'U',
    DOWN: 'D',
  },

  RESTART: {
    QUIT: 'Q',
    RE: 'R',
  },

  CHECK: {
    PLAYING: (bridge, currentPos, value) => bridge[currentPos.length] !== value,
    CELL: (currentPos, bridge, index) => currentPos[index] === bridge[index],
    WINNER: (currentPos, bridge, isPlaying) => currentPos.length === bridge.length && isPlaying,
    ARRAY: (bridge, currentPos) => JSON.stringify(bridge) === JSON.stringify(currentPos),
    BRIDGE_SIZE: size => size < 3 || size > 20 || !Number.isInteger(size),
    DIRECTION_INPUT: direction => direction !== CONSTANT.DIRECTION.UP && direction !== CONSTANT.DIRECTION.DOWN,
    RESTART_INPUT: input => input !== CONSTANT.RESTART.RE && input !== CONSTANT.RESTART.QUIT,
  },

  MSG: {
    BRIDGE_LEN: '다리의 길이를 입력해주세요.',
    CHOOSE_CELL: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
    CHOOSE_RESTART: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
    START: '다리 건너기 게임을 시작합니다.',
    RESULT: '최종 게임 결과',
    SUCCESS_RESULT: '게임 성공 여부:',
    TOTAL_ATTEMPTS: '총 시도한 횟수:',
  },

  ERROR_MSG: {
    INVALID_BRIDGE_SIZE: '[ERROR] 다리 길이는 3 ~ 20 사이의 정수여야 합니다.',
    INVALID_CELL_DIRECTION: '[ERROR] 위 아래 방향은 U와 D로 입력하세요',
    INVALID_RESTART_INPUT: '[ERROR] 재시작 값은 R과 Q로 입력하세요',
  },

  RESULT: {
    CORRECT: ' O ',
    INCORRECT: ' X ',
    EMPTY: '   ',
    SUCCESS: '성공',
    FAIL: '실패',
  },
};

module.exports = CONSTANT;
