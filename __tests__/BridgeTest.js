const Bridge = require('../src/models/Bridge');

describe('다리 클래스 테스트', () => {
  test.each([
    ['U', true],
    ['D', false],
  ])('현재 위치와 같은 값인지 판단한다.', (input, expected) => {
    const bridge = new Bridge(['U', 'D', 'D']);
    const location = 0;

    expect(bridge.isCrossed(input, location)).toEqual(expected);
  });
});
