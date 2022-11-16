const INPUT_MESSAGE = {
  BRIDGE_LENGTH: '다리의 길이를 입력해주세요.',
  MOVE_RANGE: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  RESTART: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
};

const OUTPUT_MESSAGE = {
  START_GAME: '다리 건너기 게임을 시작합니다.',
  RESULT: '최종 게임 결과',
  SUCCESS_OR_FAILURE: '게임 성공 여부: ',
  SUCCESS: '성공',
  FAILURE: '실패',
  NUMBER_OF_TRY: '총 시도한 횟수: ',
};

const ERROR_MESSAGE = {
  BRIDGE_LENGTH: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
};

Object.freeze(INPUT_MESSAGE);
Object.freeze(OUTPUT_MESSAGE);
Object.freeze(ERROR_MESSAGE);

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
