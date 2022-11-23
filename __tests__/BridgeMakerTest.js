const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

describe("Bridge Maker Object Test", () => {
  test("숫자가 아닌 값을 넣으면 에러를 반환한다.", () => {
    expect(
      BridgeMaker.makeBridge(3, BridgeRandomNumberGenerator.generate).length
    ).toBe(3);
  });
});
