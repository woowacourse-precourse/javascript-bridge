const { getDirection } = require("../src/BridgeMaker");

describe("다리 만들기 테스트", () => {
  test("다리 방향 정하기", () => {
    const randomNumbers = ["1", "0", "0"];
    const directions = ["U", "D", "D"];

    randomNumbers.forEach((number, index) => {
      const direction = getDirection(number);
      expect(direction).toBe(directions[index]);
    });
  });
});
