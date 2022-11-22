const { checkSpaceCanMove, checkGameOver } = require('../src/utils/Checker');
const { BRIDGE_MSG } = require('../src/common/Constant');
const { upward, downward } = BRIDGE_MSG;

describe('가능 검토자 테스트', () => {
  test.each([
    [upward, downward],
    [downward, upward],
  ])('입력값과 다리 칸 정보가 다르면 거짓.', (input, space) => {
    expect(checkSpaceCanMove(input, space)).toBeFalsy();
  });

  test.each([
    [downward, downward],
    [upward, upward],
  ])('입력값과 다리 칸 정보가 같으면 참.', (input, space) => {
    expect(checkSpaceCanMove(input, space)).toBeTruthy();
  });

  const failState1 = [[downward, false]];
  const failState2 = [
    [upward, true],
    [upward, false],
  ];
  const failState3 = [
    [upward, true],
    [downward, true],
    [upward, false],
  ];
  const successState = [
    [upward, true],
    [downward, true],
    [downward, true],
  ];

  test.each([failState1, failState2, failState3, successState])(
    '이동 상태와 다리 정보를 비교해 종료 여부를 확인한다.',
    (state) => {
      const bridge = [upward, downward, downward];
      expect(checkGameOver(state, bridge)).toBeTruthy();
    }
  );
});
