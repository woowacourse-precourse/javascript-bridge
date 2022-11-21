const Bridge = require('../src/Bridge.js');

describe('Bridge 클래스 테스트', () => {
  describe('isCrossable 메서드 테스트', () => {
    test('생성된 다리가 입력된 위치, 방향과 일치하면, true를 return 해야 한다.', () => {
      const directions = ['U', 'D', 'U'];
      const bridge = new Bridge(directions);
      const position = 0;
      const direction = 'U';

      const result = bridge.isCrossable(position, direction);

      expect(result).toBe(true);
    });

    test('생성된 다리가 입력된 위치, 방향과 일치하지 않으면, false를 return 해야 한다.', () => {
      const directions = ['U', 'D', 'U'];
      const bridge = new Bridge(directions);
      const position = 0;
      const direction = 'D';

      const result = bridge.isCrossable(position, direction);

      expect(result).toBe(false);
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
