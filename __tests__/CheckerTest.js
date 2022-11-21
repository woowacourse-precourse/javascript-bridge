const { checkSpaceCanCross, checkCrossBridge } = require('../src/Checker');
const { BRIDGE_MSG } = require('../src/Constant');

describe('가능 검토자 테스트', () => {
  test('입력값과 다리 칸 정보가 같은지 확인한다.', () => {
    const { upward, downward } = BRIDGE_MSG;
    const inputUpward = upward;
    const inputDownward = downward;
    const bridgeSpaceUpward = upward;
    const bridgeSpaceDownward = downward;
    expect(checkSpaceCanCross(inputUpward, bridgeSpaceUpward)).toBeTruthy();
    expect(checkSpaceCanCross(inputUpward, bridgeSpaceDownward)).toBeFalsy();
    expect(checkSpaceCanCross(inputDownward, bridgeSpaceDownward)).toBeTruthy();
    expect(checkSpaceCanCross(inputDownward, bridgeSpaceUpward)).toBeFalsy();
  });

  test('종료된 라운드와 다리의 길이가 같은지 비교한다.', () => {
    const curRound = 5;
    const correctLength = curRound;
    const incorrectLength = curRound + 3;
    expect(checkCrossBridge(curRound, correctLength)).toBeTruthy();
    expect(checkCrossBridge(curRound, incorrectLength)).toBeFalsy();
  });
});
