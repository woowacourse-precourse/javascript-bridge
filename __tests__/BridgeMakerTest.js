const { makeBridge } = require('../src/BridgeMaker.js');
const { generate } = require('../src/utils/BridgeRandomNumberGenerator.js');

describe('BridgeMaker 객체 테스트', () => {
  test.each([[{ size: 3, generate }], [{ size: 4, generate }], [{ size: 5, generate }]])(
    'makeBridge메서드의 return값은 Array의 instance여야 한다.',
    ({ size, generate }) => {
      const result = makeBridge(size, generate);

      expect(result).toBeInstanceOf(Array);
    }
  );

  test.each([[{ size: 3, generate }], [{ size: 4, generate }], [{ size: 5, generate }]])(
    'makeBridge메서드는 주어진 size값을 length로 가지는 배열을 return 해야 한다.',
    ({ size, generate }) => {
      const result = makeBridge(size, generate);

      expect(result).toHaveLength(size);
    }
  );
});
