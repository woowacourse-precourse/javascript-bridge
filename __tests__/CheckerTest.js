const { checkSpaceCanMove, checkGameOver } = require('../src/Checker');
const { BRIDGE_MSG } = require('../src/Constant');

describe('가능 검토자 테스트', () => {
  test('입력값과 다리 칸 정보가 같은지 확인한다.', () => {
    const { upward, downward } = BRIDGE_MSG;
    const inputUpward = upward;
    const inputDownward = downward;
    const bridgeSpaceUpward = upward;
    const bridgeSpaceDownward = downward;
    expect(checkSpaceCanMove(inputUpward, bridgeSpaceUpward)).toBeTruthy();
    expect(checkSpaceCanMove(inputUpward, bridgeSpaceDownward)).toBeFalsy();
    expect(checkSpaceCanMove(inputDownward, bridgeSpaceDownward)).toBeTruthy();
    expect(checkSpaceCanMove(inputDownward, bridgeSpaceUpward)).toBeFalsy();
  });

  test('이동 상태와 다리 정보를 비교해 종료 여부를 확인한다.', () => {
    const { downward, upward } = BRIDGE_MSG;
    const bridge = [upward, downward, downward];
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
    expect(checkGameOver(failState1, bridge)).toBeTruthy();
    expect(checkGameOver(failState2, bridge)).toBeTruthy();
    expect(checkGameOver(failState3, bridge)).toBeTruthy();
    expect(checkGameOver(successState, bridge)).toBeTruthy();
  });
});
