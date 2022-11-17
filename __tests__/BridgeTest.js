const Bridge = require('../src/domain/bridge/Bridge');

describe('Bridge 클래스 테스트', () => {
  test.each([
    [0, 'U', true],
    [0, 'D', false],
    [1, 'D', true],
  ])(
    '다리의 발판을 밟을 수 있는지 확인하는 함수',
    (index, direction, result) => {
      const bridge = new Bridge(['U', 'D', 'U']);
      expect(bridge.stepOn(index, direction)).toBe(result);
    },
  );

  test.each([[['U', 'U']], [Array.from({ length: 21 }, () => 'U')]])(
    '다리 발판의 길이가 범위에 충족하지 않는 경우',
    (panels) => {
      expect(() => {
        const bridge = new Bridge(panels);
      }).toThrow('[ERROR]');
    },
  );
});
