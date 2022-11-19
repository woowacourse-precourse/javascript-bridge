const { MOVING } = require("../src/constants/Values");
const { ERROR } = require("../src/constants/FixMessages");
const Validate = require("../src/Validate");

describe("다리 이동 시 입력값 예외 검증 테스트", () => {
  test.each([["u"], ["d"], ["a"], ["3"],["UU"],["DD"],["UD"]])
  ("다리 이동 입력시 입력 조건 외 일 경우 예외 테스트", 
  (input) => {
    const validate = new Validate();

    expect(() => {
      validate.validateMove(input);
    }).toThrow(ERROR.INPUT_MOVING);
  });
});