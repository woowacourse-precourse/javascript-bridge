const Validation = require('../src/Validation');

describe("다리 길이 입력값 예외 테스트", () => {
  test.each([[""], ["ds"], [26]])("다리 길이 입력값 대한 예외 처리", (input) => {
    expect(() => Validation.checkBridgeLength(input)).toThrow(); 
  });
});