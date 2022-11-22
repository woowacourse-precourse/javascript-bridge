const NUMBER = {
  INITAIL_BRIDGE: 0,
  INITAIL_ROUND: 1,
};

const BRIDGE = {
  INITAIL_UP: '[',
  INITAIL_DOWN: '[',
};

const INPUT_TEXT = {
  STRAT: '다리 건너기 게임을 시작합니다. \n',
  SIZE: '다리의 길이를 입력해주세요. \n',
  MOVEMENT: '\n이동할 칸을 선택해주세요. (위: U, 아래: D) \n',
  QUIT_OR_RETRY:
    '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q) \n',
};

const OUTPUT_TEXT = {
  GAME_RESULT: '\n최종 게임 결과',
  SUCCESS: '\n게임 성공 여부: 성공',
  FAIL: '\n게임 성공 여부: 실패',
  TRY_COUNT: '총 시도한 횟수: ',
};

const ERROR_TEXT = {
  SIZE: '[ERROR] 3 이상 20 이하의 숫자를 입력해주세요.',
  MOVEMENT: '[ERROR] 대문자 U 와 D 를 입력해주세요.',
  QUIT_OR_RETRY: '[ERROR] 대문자 R 과 Q 를 입력해주세요.',
};

module.exports = {
  NUMBER,
  BRIDGE,
  INPUT_TEXT,
  OUTPUT_TEXT,
  ERROR_TEXT,
};
