const INPUT_MESSAGE = {
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVING_COMMAND: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const OUTPUT_MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  GAME_RESULT: '최종 게임 결과',
  GAME_SUCCESS: (gameOutcome) => `게임 성공 여부: ${gameOutcome}`,
  TRY_COUNT: (tryCount) => `총 시도한 횟수: ${tryCount}`,
  LINE: '\n',
};

const ERROR_MSG = {
  NUMBER: '[ERROR] 다리의 길이는 숫자만 입력해야 합니다.',
  RANGE: '[ERROR] 다리의 길이는 3 이상 20 이하여야 합니다.',
  MOVING: '[ERROR] 이동할 다리 칸은 U 또는 D만 입력 가능합니다.',
  COMMAND: '[ERROR] 게임 진행 옵션은 R과 Q만 입력 가능합니다.',
};

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MSG };
