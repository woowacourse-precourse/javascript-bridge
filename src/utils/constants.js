const DEFAULT = {
  START_NUM: 3,
  END_NUM: 20,
  UP: 'U',
  DOWN: 'D',
  CORRECT: 'O',
  INCORRECT: 'X',
  RESTART: 'R',
  QUIT: 'Q',
};

const GAME_MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.',
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  CHOOSE: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  RESTART: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  RESULT: '최종 게임 결과',
  SUCCESS: '게임 성공 여부: 성공',
  FAIL: '게임 성공 여부: 실패',
  ATTEMPT: '총 시도한 횟수: ',
};

const ERROR_MESSAGE = {
  RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  U_OR_R: '[ERROR] "U"와 "R"만 입력할 수 있습니다.',
  R_OR_Q: '[ERROR] "R"과 "Q"만 입력할 수 있습니다.',
};

module.exports = { DEFAULT, GAME_MESSAGE, ERROR_MESSAGE };
