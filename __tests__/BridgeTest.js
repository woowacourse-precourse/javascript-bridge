const Bridge = require('../src/models/Bridge');

describe('다리 클래스 테스트', () => {
  test.each([
    [0, 'U'],
    [1, 'D'],
  ])('현재 위치를 반환', (location, expected) => {
    const bridge = new Bridge(['U', 'D', 'D']);
    const result = bridge.current(location);

    expect(result).toEqual(expected);
  });

  test.each([
    [0, false],
    [2, true],
  ])('마지막 위치인지 확인', (location, expected) => {
    const bridge = new Bridge(['U', 'D', 'D']);
    const result = bridge.isLastLocation(location);

    expect(result).toEqual(expected);
  });
});
