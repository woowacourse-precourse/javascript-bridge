const { RETRY } = require("../src/constants/Values");
const { ERROR } = require("../src/constants/FixMessages");
const Validate = require("../src/Validate");

describe("재시작 여부 입력값 예외 검증 테스트", () => {
  test.each([[" "], ["q"], ["RR"], ["RQ"],["R, Q"]])
  ("재시작과 종료 입력 조건 외 일 경우 예외 테스트", 
  (input) => {
    const validate = new Validate();

    expect(() => {
      validate.validateRetry(input);
    }).toThrow(ERROR.INPUT_RETRY);
  });
});