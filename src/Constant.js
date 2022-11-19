const INPUT_MESSAGE = {
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  READ_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  READ_GAME_COMMAND:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
};
const START_MESSAGE = '다리 건너기 게임을 시작합니다.';

const OUTPUT_MESSAGE = {
  RESULT: '최종 게임 결과',
  SUCCESS: '게임 성공 여부: 성공',
  FAIL: '게임 성공 여부: 실패',
  COUNT_TRY: '총 시도한 횟수: ',
};
module.exports = { START_MESSAGE, INPUT_MESSAGE, OUTPUT_MESSAGE };
