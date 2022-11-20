const BridgeMaker = require("../src/BridgeMaker");

describe("다리 생성 테스트", () => {
  test("전달 받은 사이즈만큼 다리 만들기", () => {
    const inputLength = 5;
    const brideSize = 5;
    const errorTest = () => BridgeMaker.getBridge(inputLength);
    expect(errorTest().length).toBe(brideSize);
  });
});
