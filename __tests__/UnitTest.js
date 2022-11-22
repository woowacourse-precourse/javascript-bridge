/* eslint-disable max-lines-per-function */

const { INPUT_VAL } = require("../src/utils/stringsUtils");
const Validation = require("../src/utils/Validation");

describe("Input Validation 클래스 테스트", () => {
  test("Bridge size validation 테스트", () => {
    expect(() => Validation.size("D")).toThrow(INPUT_VAL.SIZE_ERROR);
    expect(Validation.size("4")).toBe(4);
    expect(() => Validation.size(1)).toThrow(INPUT_VAL.SIZE_ERROR);
    expect(() => Validation.size("21")).toThrow(INPUT_VAL.SIZE_ERROR);
    expect(() => Validation.size(1, 3)).toThrow(INPUT_VAL.SIZE_ERROR);
  });
  test("Moving validation 테스트", () => {
    expect(() => Validation.moving("R")).toThrow(INPUT_VAL.MOVING_ERROR);
    expect(() => Validation.moving(1)).toThrow(INPUT_VAL.MOVING_ERROR);
    expect(() => Validation.moving("UD")).toThrow(INPUT_VAL.MOVING_ERROR);
  });
  test("gameCommand validation 테스트", () => {
    expect(() => Validation.gameCommand("U")).toThrow(INPUT_VAL.RETRY_ERROR);
    expect(() => Validation.gameCommand(1)).toThrow(INPUT_VAL.RETRY_ERROR);
    expect(() => Validation.gameCommand(" ")).toThrow(INPUT_VAL.RETRY_ERROR);
  });
});
