const { BRIDGE_MSG } = require('../src/common/Constant');
const { judgeGameSuccess } = require('../src/utils/Judge');
const { downward, upward } = BRIDGE_MSG;

describe('판단자 테스트', () => {
  const bridge = [upward, downward, downward];

  test.each([
    [[downward, false]],
    [
      [upward, true],
      [upward, false],
    ],
    [
      [upward, true],
      [downward, true],
      [upward, false],
    ],
  ])('실패한 이동 상태는 실패로 판단한다.', (state) => {
    expect(judgeGameSuccess(state, bridge)).toBeFalsy();
  });

  test('성공한 이동 상태는 성공으로 판단한다.', () => {
    const successState = [
      [upward, true],
      [downward, true],
      [downward, true],
    ];
    expect(judgeGameSuccess(successState, bridge)).toBeTruthy();
  });
});
