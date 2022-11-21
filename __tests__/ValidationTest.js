const Validation = require('../src/Validation.js');
const { ErrorMessage } = require("../src/constant/Constants.js");

describe("Validation 테스트", () => {

  test("다리 길이에 문자 값 입력 테스트", () => {
    expect(() => {
      Validation.isNumber("a");
    }).toThrow(ErrorMessage.IS_NOT_NUMBER);
  });

  test("다리 길이에 범위 벗어난 값 입력 테스트", () => {
    expect(() => {
      Validation.isValidRangeSize(1);
    }).toThrow(ErrorMessage.BRIDGE_SIZE);
  });

  
  test("움직일 방향에 숫자 값 입력 테스트", () => {
    expect(() => {
      Validation.isValidDirection(1);
    }).toThrow(ErrorMessage.MOVING_DIRECTION);
  });

  test("움직일 방향에 U와 D가 아닌 값 입력 테스트", () => {
    expect(() => {
      Validation.isValidDirection("K");
    }).toThrow(ErrorMessage.MOVING_DIRECTION);
  });


  test("게임 커맨드에 숫자 값 입력 테스트", () => {
    expect(() => {
      Validation.isValidRetryOrQuitInput(1);
    }).toThrow(ErrorMessage.RETRY_OR_QUIT);
  });
  
  test("게임 커맨드에 R과 Q가 아닌 값 입력 테스트", () => {
    expect(() => {
      Validation.isValidRetryOrQuitInput("K");
    }).toThrow(ErrorMessage.RETRY_OR_QUIT);
  });
  
});