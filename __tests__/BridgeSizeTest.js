const BridgeSize = require('../src/domain/bridge/BridgeSize');
const BridgeSizeException = require('../src/exception/BridgeSizeException');

describe('BridgeSize 클래스 테스트', () => {
  test.each([[0], [2], [21], [100]])(
    '길이가 조건에 부합하지 않는 경우 예외처리',
    (size) => {
      expect(() => {
        BridgeSize.validate(size);
      }).toThrow(BridgeSizeException);
    },
  );
});
