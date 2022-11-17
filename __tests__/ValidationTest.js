const { ERROR_MESSAGE } = require("../src/constant");
const Validation = require("../src/Validation");

describe("예외 상황 테스트", () => {
  test("3과 20사이 이외의 수를 넣었을 때 예외 발생", () => {
    const numbers = [2, 40, 5.5];

    numbers.forEach((number) => {
      expect(Validation.checkBridgeNumber(number)).toBeFalsy();
    });
  });

  test("U와 D 이외의 입력을 넣었을 때 예외 발생", () => {
    const inputs = ["E", "9", "UD"];

    inputs.forEach((input) => {
      expect(Validation.checkUorD(input)).toBeFalsy();
    });
  });

  test("R과 Q 이외의 입력을 넣었을 때 예외 발생", () => {
    const inputs = ["D", "9", "RE"];

    inputs.forEach((input) => {
      expect(Validation.checkRorQ(input)).toBeFalsy();
    });
  });
});
