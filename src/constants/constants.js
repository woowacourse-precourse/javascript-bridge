const GAME_MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  SET_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.\n',
  MOVE_CHOICE: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  GAME_RETRY:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  GAME_RESULT: '최종 게임 결과',
  GAME_CLEAR: (string) => `게임 성공 여부: ${string}`,
  TRY_COUNT: (count) => `총 시도한 횟수: ${count}`,
};

const GAME_INPUT = {
  UP: 'U',
  DOWN: 'D',
  RETRY: 'R',
  QUIT: 'Q',
};

ERROR_MESSAGE = {
  INVALID_LENGTH: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  INVALID_MOVE: '[ERROR] U와 D중 한 글자만 입력해 주세요.',
  INVALID_QUIT: '[ERROR] R와 Q중 한 글자만 입력해 주세요.',
};

module.exports = { GAME_MESSAGE, GAME_INPUT, ERROR_MESSAGE };
