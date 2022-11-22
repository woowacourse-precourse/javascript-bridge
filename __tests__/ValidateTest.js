const { SIZE, MOVING, RETRY } = require("../src/constants/Values");
const { ERROR } = require("../src/constants/FixMessages");
const Validate = require("../src/Validate");

describe("예외 검증 모델 테스트", () => {
  test.each([[21], ["3,4"], [" "], [-1],["a"]])
  ("다리 길이 입력시 입력 조건 외 일 경우 예외 테스트", 
  (input) => {
    const validate = new Validate();

    expect(() => {
      validate.validateBridgeSize(input);
    }).toThrow(ERROR.INPUT_BRIDGE_SIZE);
  })

  test.each([["u"], ["d"], ["a"], [3],["UU"],["DD"],["UD"]])
  ("이동 입력시 입력 조건 외 일 경우 예외 테스트", 
  (input) => {
    const validate = new Validate();

    expect(() => {
      validate.validateMove(input);
    }).toThrow(ERROR.INPUT_MOVING);
  })

  test.each([[" "], ["q"], ["RR"], ["RQ"],["R, Q"]])
  ("재시작과 종료 입력 조건 외 일 경우 예외 테스트", 
  (input) => {
    const validate = new Validate();

    expect(() => {
      validate.validateCommand(input);
    }).toThrow(ERROR.INPUT_RETRY);
  })
});