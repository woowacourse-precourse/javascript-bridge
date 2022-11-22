const Validate = require("../src/utils/Validate");
const Constant = require("../src/utils/Constant");
describe("다리 크기 입력에 대한 유효성 검증 -  Validate.validateBridgeSize", () => {
  test("다리 크기는 숫자를 입력해야 한다.", () => {
    //given
    const userInput = "B";
    //when
    //then
    expect(() => Validate.validateBridgeSize(userInput)).toThrow(
      Constant.ERROR.ONLY_NUMBER
    );
  });

  test("다리 크기는 3이상 입력해야 한다.", () => {
    //given
    const userInput = 1;
    //when
    //then
    expect(() => Validate.validateBridgeSize(userInput)).toThrow(
      Constant.ERROR.BRIDGE_SIZE
    );
  });

  test("다리 크기는 20이하 입력해야 한다.", () => {
    //given
    const userInput = 50;
    //when
    //then
    expect(() => Validate.validateBridgeSize(userInput)).toThrow(
      Constant.ERROR.BRIDGE_SIZE
    );
  });

  test("다리 크기는 한개만 입력해야 한다.", () => {
    //given
    const userInput = "3 4";
    //when
    //then
    expect(() => Validate.validateBridgeSize(userInput)).toThrow(
      Constant.ERROR.ONLY_ONE_NUMBER
    );
  });
});

describe("사용자가 입력한 이동에 대한 유효성 검증 - Validate.validateUserInputMove", () => {
  test("U와 D만 입력해야 한다.", () => {
    //given
    const userInput = "Q";
    //when
    //then
    expect(() => Validate.validateUserInputMove(userInput)).toThrow(
      Constant.ERROR.ONLY_U_OR_D
    );
  });

  test("대문자로 입력해야한다.", () => {
    //given
    const userInput = "u";
    //when
    //then
    expect(() => Validate.validateUserInputMove(userInput)).toThrow(
      Constant.ERROR.ONLY_UPPERCASE
    );
  });

  test("1개만 입력해야 한다.", () => {
    //given
    const userInput = "U D";
    //when
    //then
    expect(() => Validate.validateUserInputMove(userInput)).toThrow(
      Constant.ERROR.ONLY_INPUT_ONE
    );
  });
});

describe("게임을 다시 할건지 입력에 대한 유효성 검증 - Validate.validateUserInputRetry", () => {
  test("R과 Q만 입력해야 한다.", () => {
    //given
    const userInput = "T";
    //when
    //then
    expect(() => Validate.validateUserInputRetry(userInput)).toThrow(
      Constant.ERROR.ONLY_R_OR_Q
    );
  });

  test("대문자로 입력해야 한다.", () => {
    //given
    const userInput = "r";
    //when
    //then
    expect(() => Validate.validateUserInputRetry(userInput)).toThrow(
      Constant.ERROR.ONLY_UPPERCASE
    );
  });

  test("1개만 입력해야 한다.", () => {
    //given
    const userInput = "R Q";
    //when
    //then
    expect(() => Validate.validateUserInputRetry(userInput)).toThrow(
      Constant.ERROR.ONLY_INPUT_ONE
    );
  });
});
