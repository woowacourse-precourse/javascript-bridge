const { SIZE } = require("../src/constants/Values");
const { ERROR } = require("../src/constants/FixMessages");
const Validate = require("../src/Validate");

describe("다리 이동 시 입력값 예외 검증 테스트", () => {
  test.each([["21"], ["3,4"], [" "], ["-1"],["a"]])
  ("다리 길이 입력시 입력 조건 외 일 경우 예외 테스트", 
  (input) => {
    const validate = new Validate();

    expect(() => {
      validate.validateBridgeSize(input);
    }).toThrow(ERROR.INPUT_BRIDGE_SIZE);
  });
});