const BridgeConverter = require("../src/BridgeConverter");

describe("다리 배열을 문자열로 바꾸는 BridgeConverter 테스트", () => {
  test("문자열로 프린트하기 위한 ' '로 구성된 빈 배열을 생성", () => {
    expect(BridgeConverter.makeEmptyBridge(3)).toEqual([
      [" ", " ", " "],
      [" ", " ", " "],
    ]);
  });
});
