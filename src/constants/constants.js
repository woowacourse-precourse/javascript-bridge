const GAME_MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.',
  SET_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.',
  MOVE_CHOICE: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  GAME_RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  GAME_RESULT: '최종 게임 결과',
  GAME_CLEAR: '게임 성공 여부:',
  TRY_COUNT: (count) => `총 시도한 횟수: ${count}`,
};

const GAME_INPUT = {
  UP: 'U',
  DOWN: 'D',
  RETRY: 'R',
  QUIT: 'Q',
};

module.exports = { GAME_MESSAGE, GAME_INPUT };
