const Validation = require('../src/Validation');

describe("사용자 입력값 예외 테스트", () => {
  test.each([[""], ["ds"], [26]])("다리 길이 입력값에 대한 예외 테스트", (input) => {
    expect(() => Validation.checkBridgeLength(input)).toThrow(); 
  });

  test.each([[""], [1], ["u"], ["d"], ["UD"]])("이동할 칸 입력값에 대한 예외 테스트", (input) => {
    expect(() => Validation.checkSpace(input)).toThrow(); 
  });

});

