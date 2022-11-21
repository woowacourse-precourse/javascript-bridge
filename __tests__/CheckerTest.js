const { checkSpaceCanMove } = require('../src/Checker');
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
});
