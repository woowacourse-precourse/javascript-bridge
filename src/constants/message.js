const MESSAGE = {
  OUTPUT: {
    GAME_START: '다리 건너기 게임을 시작합니다.',
    GAME_RESULT: '최종 게임 결과',
    IS_GAME_SUCCESS: (isGameSuccess) => `게임 성공 여부: ${isGameSuccess ? '성공' : '실패'}`,
    ATTEMPT: (attempt) => `총 시도한 횟수: ${attempt}`,
  },
  INPUT: {
    BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
    MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
    GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  },
};

module.exports = Object.freeze(MESSAGE);
