const { checkBridgeSizeInput } = require("../src/ErrorCase");

describe("에러 발생 상황 테스트", () => {
  test("다리 길이 입력 에러 테스트", () => {
    const sizes = ["a", "51", "2", "4j", "5", "19"];
    const returnValues = [true, true, true, true, false, false];

    sizes.forEach((size, index) => {
      const value = checkBridgeSizeInput(size);
      expect(value).toBe(returnValues[index]);
    });
  });
});
