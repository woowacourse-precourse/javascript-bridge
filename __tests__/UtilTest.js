const { ERROR_MSG, POSITIONS } = require('../src/constants');
const { validateBridgeSize, validatePosition } = require('../src/Util');

describe('유틸 테스트', () => {
  test('다리 길이 유효성 ]', () => {
    const invalidSize = [1, '2', '-3', '01', 'aka', 'test', '0999', '030'];
    invalidSize.forEach(size => {
      expect(() => validateBridgeSize(size)).toThrow(
        ERROR_MSG.invalidBridgeSize
      );
    });
    const validSize = [3, 5, 6, 9, 19];
    validSize.forEach(size => {
      expect(() => validateBridgeSize(size)).not.toThrow();
    });
  });

  test('이동할 칸 선택 유효성', () => {
    const invalidPosition = [1, 2, 'u', 'd', 'UP', 'DOWN'];
    invalidPosition.forEach(position => {
      expect(() => validatePosition(position)).toThrow(
        ERROR_MSG.invalidPosition
      );
    });

    POSITIONS.forEach(position => {
      expect(() => validatePosition(position)).not.toThrow(
        ERROR_MSG.invalidPosition
      );
    });
  });
});
