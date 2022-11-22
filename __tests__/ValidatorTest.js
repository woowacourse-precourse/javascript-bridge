const BridgeValidator = require('../src/Bridge.validator');

describe('Validator 테스트', () => {
  test('브릿지의 길이는 3~20이다.', () => {
    expect(() => {
      BridgeValidator.checkInputBridgeLength(2);
    }).toThrow();
  });
  test('브릿지의 길이는 3~20이다.', () => {
    expect(() => {
      BridgeValidator.checkInputBridgeLength(21);
    }).toThrow();
  });
  test('브릿지의 길이는 숫자이다.', () => {
    expect(() => {
      BridgeValidator.checkInputBridgeLength('a');
    }).toThrow();
  });
});
