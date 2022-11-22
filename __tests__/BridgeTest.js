const BridgeTest = require("../src/BridgeTest");

describe("다리 생성 테스트", () => {
  test("다리에 U나 D가 아닌 값이 들어있으면 예외가 발생한다.", () => {
    expect(() => {
      new BridgeTest(["U", "D", "R"]);
    }).toThrow("[ERROR]");
  });
});