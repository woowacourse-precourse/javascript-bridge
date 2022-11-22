const BridgeValidation = require('../../src/validations/Bridge');

describe('BridgeValidation', () => {
  test('다리 길이가 숫자가 아닐 경우 예외를 던진다.', () => {
    expect(() => BridgeValidation.isValidSize('a')).toThrow();
  });

  test('입력이 3이상 20이하가 아닐 경우 예외를 던진다.', () => {
    expect(() => {
      BridgeValidation.isValidSize(2);
    }).toThrow('[ERROR]');
  });
});
