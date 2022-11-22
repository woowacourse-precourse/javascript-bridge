const Validation = require('../src/Validation');

describe("사용자 입력값 예외 테스트", () => {
  test.each([[""], ["ds"], [26]])("다리 길이 입력값에 대한 예외 테스트", (input) => {
    expect(() => Validation.checkBridgeLength(input)).toThrow(); 
  });

  test.each([[""], [1], ["u"], ["d"], ["UD"]])("이동할 칸 입력값에 대한 예외 테스트", (input) => {
    expect(() => Validation.checkSpace(input)).toThrow(); 
  });

  test.each([[""], [1], ["r"], ["q"], ["RQ"]])("재시도 여부 입력값에 대한 예외 테스트", (input) => {
    expect(() => Validation.checkRetryCommand(input)).toThrow(); 
  });
});

describe("사용자 입력값 정상 테스트", () => {
  test.each([[3], [20]])("다리 길이 정상 입력값 테스트", (input) => {
    expect(() => Validation.checkBridgeLength(input)).not.toThrow(); 
  });

  test.each([["U"], ["D"]])("이동할 칸 입력값에 대한 예외 테스트", (input) => {
    expect(() => Validation.checkSpace(input)).not.toThrow(); 
  });

  test.each([["R"], ["Q"]])("재시도 여부 입력값에 대한 예외 테스트", (input) => {
    expect(() => Validation.checkRetryCommand(input)).not.toThrow(); 
  });
});

