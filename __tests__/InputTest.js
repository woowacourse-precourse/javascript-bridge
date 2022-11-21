const Validation = require('../src/Validation');

describe('다리 길이 입력값 테스트', () => {
  test('숫자가 아닌 값을 입력한 경우', () => {
    const inputValues = ['a', 'b', '\n'];
    inputValues.forEach((inputValue) => {
      expect(Validation.validateBridgeSize(inputValue)).toBeFalsy();
    });
  });
  test('3~20 사이의 값이 아닌 값을 입력한 경우', () => {
    const inputValues = ['0', '1', '-1', '21', '100'];
    inputValues.forEach((inputValue) => {
      expect(Validation.validateBridgeSize(inputValue)).toBeFalsy();
    });
  });
});

describe('다리 이동 입력값 테스트', () => {
  test('입력값이 U/D 가 아닌 경우', () => {
    const inputValues = ['a', 'b', '\n', '1', 'u', 'd'];
    inputValues.forEach((inputValue) => {
      expect(Validation.validateDirection(inputValue)).toBeFalsy();
    });
  });
});

describe('재시도 여부 입력값 테스트', () => {
  test('입력값이 U/D 가 아닌 경우', () => {
    const inputValues = ['a', 'b', '\n', '1', 'r', 'q'];
    inputValues.forEach((inputValue) => {
      expect(Validation.validateRetryComment(inputValue)).toBeFalsy();
    });
  });
});
