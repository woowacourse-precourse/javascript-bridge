const { BRIDGE_MSG } = require('../src/common/Constant');
const { judgeGameSuccess } = require('../src/utils/Judge');

describe('판단자 테스트', () => {
  test('이동 상태와 다리를 비교해 게임 성공 여부를 판단한다.', () => {
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
    expect(judgeGameSuccess(failState1, bridge)).toBeFalsy();
    expect(judgeGameSuccess(failState2, bridge)).toBeFalsy();
    expect(judgeGameSuccess(failState3, bridge)).toBeFalsy();
    expect(judgeGameSuccess(successState, bridge)).toBeTruthy();
  });
});
