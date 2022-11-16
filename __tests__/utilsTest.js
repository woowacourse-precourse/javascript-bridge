const { BridgeSize } = require("../src/utils");

describe("제한 조건 테스트", () => {
  test("다리 길이 입력시 유효성 검사 진행 여부 테스트", () => {
    expect(() => {
      new BridgeSize("3 ");
    }).toThrow("[ERROR] 숫자만 입력 가능합니다.");
  });
});
