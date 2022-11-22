const MESSAGE = {
  OUTPUT: {
    GAME_START: '다리 건너기 게임을 시작합니다.\n',
    GAME_RESULT: '최종 게임 결과',
    MAP: (map) => `[ ${map[0].join(' | ')} ]\n[ ${map[1].join(' | ')} ]\n`,
    IS_GAME_SUCCESS: (isGameSuccess) => `게임 성공 여부: ${isGameSuccess ? '성공' : '실패'}`,
    ATTEMPT: (attempt) => `총 시도한 횟수: ${attempt.toLocaleString()}`,
  },
  INPUT: {
    BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
    MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  },
};

module.exports = Object.freeze(MESSAGE);
