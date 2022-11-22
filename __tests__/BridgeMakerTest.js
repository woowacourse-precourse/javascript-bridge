/* eslint-disable max-lines-per-function */
const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/utils/BridgeRandomNumberGenerator');

describe('BridgeMaker 테스트', () => {
  test.each(['3', '10', '20'])(
    'makeBridge 메서드는 입력받은 길이만큼의 다리를 생성하여 반환',
    (size) => {
      const bridge = BridgeMaker.makeBridge(
        size,
        BridgeRandomNumberGenerator.generate,
      );

      expect(bridge.length).toBe(Number(size));
    },
  );
});
