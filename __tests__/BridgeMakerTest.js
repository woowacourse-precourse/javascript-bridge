/* eslint-disable max-lines-per-function */
const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('BridgeMaker 테스트', () => {
  test.each(['-1', '0', '3.3', '21', 'abc'])(
    'makeBridge 메서드는 다리의 길이가 유효하지 않으면 에러를 발생',
    (size) => {
      expect(() => {
        BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
      }).toThrow('[ERROR]');
    },
  );
});
