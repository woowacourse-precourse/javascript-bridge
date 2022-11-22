const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

describe("BridgeRandomNumberGenerator 클래스 테스트", () => {
  test("generate 메서드: 0 또는 1 반환", () => {
    const randomNumber = BridgeRandomNumberGenerator.generate();
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(1);
  });
});
