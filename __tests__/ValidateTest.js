const validate = require('../src/ValidateInput');

describe('입력값 유효성 테스트', () => {
  test('다리 길이 테스트 1 (범위 3 ~ 20)', () => {
    expect(() => {
      validate.validateBridgeSize(2);
    }).toThrow();
  });

  test('다리 길이 테스트 2 (범위 3 ~ 20)', () => {
    expect(() => {
      validate.validateBridgeSize(21);
    }).toThrow();
  });

  test('다리 길이 테스트 3 (숫자가 아닌 값)', () => {
    expect(() => {
      validate.validateBridgeNumber('3a');
    }).toThrow();
  });

  test('다리 길이 테스트 4 (숫자가 아닌 값)', () => {
    expect(() => {
      validate.validateBridgeNumber(3.3);
    }).toThrow();
  });

  test('이동할 칸 테스트 1 (U 혹은 D 가 아닌값)', () => {
    expect(() => {
      validate.validateDirection('R');
    }).toThrow();
  });

  test('재시작 테스트 1 (R 혹은 Q 가 아닌값)', () => {
    expect(() => {
      validate.validateControl('U');
    }).toThrow();
  });
});
