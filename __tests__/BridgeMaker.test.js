const BridgeMaker = require("../src/BridgeMaker");

describe("다리 생성 테스트", () => {
  test("전달 받은 사이즈만큼 다리 만들기", () => {
    const errorTest = () => BridgeMaker.getBridge(5);
    expect(errorTest().length).toBe(5);
  });
});
