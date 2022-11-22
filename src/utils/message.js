const NEW_LINE = '\n';

const INPUT_MESSAGE = {
  BRIDGE_LENGTH: '다리의 길이를 입력해주세요.',
  MOVE_RANGE: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  RESTART: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
};

const OUTPUT_MESSAGE = {
  START_GAME: '다리 건너기 게임을 시작합니다.',
  RESULT: '최종 게임 결과',
  SUCCESS: '게임 성공 여부: 성공',
  FAILURE: '게임 성공 여부: 실패',
  NUMBER_OF_TRY: '총 시도한 횟수',
};

const ERROR_MESSAGE = {
  BOUND: '[ERROR] 올바른 크기의 숫자를 입력해주세요.',
  NAN: '[ERROR] 숫자만 입력할 수 있습니다.',
  WRONG: '[ERROR] 올바른 문자를 입력해주세요.',
};

Object.freeze(INPUT_MESSAGE);
Object.freeze(OUTPUT_MESSAGE);
Object.freeze(ERROR_MESSAGE);

module.exports = { NEW_LINE, INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
