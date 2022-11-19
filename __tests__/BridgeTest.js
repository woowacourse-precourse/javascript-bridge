const BridgeValidation = require('../src/Validation/BridgeValidation');

describe('다리 생성 테스트', () => {
  test('입력이 3이상 20이하가 아닌경우', () => {
    expect(() => {
      BridgeValidation(2);
    }).toThrow('[ERROR]');
  });
  test('입력이 숫자가 아닌경우', () => {
    expect(() => {
      BridgeValidation('abc');
    }).toThrow('[ERROR]');
  });
});
