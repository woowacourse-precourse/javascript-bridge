const Bridge = require('../src/domain/Bridge');
const { mockRandoms } = require('./ApplicationTest');

describe('다리 메서드 테스트', () => {
  test('건널 수 있는 다리인지 여부를 잘 반환하는지(정답)', () => {
    mockRandoms(['1', '0', '1']);

    const bridge = new Bridge(3);
    expect(bridge.isMovable(1, 'D')).toBeTruthy();
  });

  test('건널 수 있는 다리인지 여부를 잘 반환하는지(오답)', () => {
    mockRandoms(['1', '0']);

    const bridge = new Bridge(2);
    expect(bridge.isMovable(0, 'D')).toBeFalsy();
  });
});
