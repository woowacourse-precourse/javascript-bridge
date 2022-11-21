const Bridge = require('../src/Bridge.js');

describe('Bridge 클래스 테스트', () => {
  describe('isCrossable 메서드 테스트', () => {
    test('위치와 방향이 주어지면, true와 false중 하나를 return 해야 한다.', () => {
      const directions = ['U', 'D', 'U'];
      const bridge = new Bridge(directions);
      const position = 0;
      const direction = 'U';

      const result = bridge.isCrossable(position, direction);

      expect([true, false]).toContain(result);
    });

    test.each([
      [{ position: 0, direction: 'U' }],
      [{ position: 1, direction: 'D' }],
      [{ position: 2, direction: 'U' }],
    ])('위치와 방향이 일치하면, true를 return 해야 한다.', ({ position, direction }) => {
      const directions = ['U', 'D', 'U'];
      const bridge = new Bridge(directions);

      const result = bridge.isCrossable(position, direction);

      expect(result).toBe(true);
    });
  });

  describe('isEveryBlockPassed 메서드 테스트', () => {
    test('통과한 블럭 수가 다리 길이와 일치하면, true를 return 해야 한다.', () => {
      const directions = ['U', 'D', 'U'];
      const bridge = new Bridge(directions);
      const passedBlockCount = 3;

      const result = bridge.isEveryBlockPassed(passedBlockCount);

      expect(result).toBe(true);
    });

    test('통과한 블럭 수가 다리 길이와 일치하지 않으면, false를 return 해야 한다.', () => {
      const directions = ['U', 'D', 'U'];
      const bridge = new Bridge(directions);
      const passedBlockCount = 2;

      const result = bridge.isEveryBlockPassed(passedBlockCount);

      expect(result).toBe(false);
    });
  });
});
