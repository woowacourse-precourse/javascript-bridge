const { checkBridgeSize } = require('../src/InputView');

describe('checkBridgeSize 테스트', () => {
  test('올바른 입력', () => {
    expect(() => {
      checkBridgeSize(3);
    }).not.toThrow();
  });

  test('3 미만의 숫자 입력', () => {
    expect(() => {
      checkBridgeSize(2);
    }).toThrow();
  });

  test('20 초과의 숫자 입력', () => {
    expect(() => {
      checkBridgeSize(21);
    }).toThrow();
  });

  test('소수 입력', () => {
    expect(() => {
      checkBridgeSize(3.14);
    }).toThrow();
  });
});
