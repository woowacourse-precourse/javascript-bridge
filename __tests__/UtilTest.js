const { ERROR_MSG } = require('../src/constants');
const { validateBridgeSize } = require('../src/Util');

describe('유틸 테스트', () => {
  test('다리 길이 유효성', () => {
    const invalidSize = [1, '2', '-3', '01', 'aka', 'test', '0999', '030'];
    invalidSize.forEach(size => {
      expect(validateBridgeSize(size)).toEqual(false);
    });

    const validSize = [3, 5, 6, 9, 19];
    validSize.forEach(size => {
      expect(validateBridgeSize(size)).toEqual(true);
    });
  });
});
