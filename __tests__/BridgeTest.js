const Bridge = require('../src/models/Bridge');

describe('다리 클래스 테스트', () => {
  test.each([
    [0, 'U'],
    [1, 'D'],
  ])('현재 위치를 반환', (location, expected) => {
    const bridge = new Bridge(['U', 'D', 'D']);
    const result = bridge.getCurrentBridge(location);

    expect(result).toEqual(expected);
  });

  test.each([
    [['U', 'D', 'D'], 3],
    [['U', 'D', 'D', 'U'], 4],
  ])('다리 사이즈 반환', (arr, expected) => {
    const bridge = new Bridge(arr);
    const result = bridge.getSize();

    expect(result).toEqual(expected);
  });
});
