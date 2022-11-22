const { checkBridgeSizeInput, checkMovingInput, checkRetrialInput } = require("../src/ErrorCase");

describe("에러 발생 상황 테스트", () => {
  test("다리 길이 입력 에러 테스트", () => {
    const sizes = ["a", "51", "2", "4j", "5", "19"];
    const returnValues = [true, true, true, true, false, false];

    sizes.forEach((size, index) => {
      const value = checkBridgeSizeInput(size);
      expect(value).toBe(returnValues[index]);
    });
  });

  test("이동 방향 입력 에러 테스트", () => {
    const directions = ["U", "D", 1, "F"];
    const returnValues = [false, false, true, true];

    directions.forEach((direction, index) => {
      const value = checkMovingInput(direction);
      expect(value).toBe(returnValues[index]);
    });
  });

  test("재시작 여부 입력 에러 테스트", () => {
    const commands = ["R", "Q", 4, "p"];
    const booleanValues = [false, false, true, true];
    commands.forEach((command, index) => {
      const booleanValue = checkRetrialInput(command);
      expect(booleanValue).toBe(booleanValues[index]);
    });
  });
});
