const BridgeConverter = require("../src/BridgeConverter");

describe("다리 배열을 문자열로 바꾸는 BridgeConverter 테스트", () => {
  test("문자열로 프린트하기 위한 ' '로 구성된 빈 배열을 생성", () => {
    expect(BridgeConverter.makeEmptyBridge(3)).toEqual([
      [" ", " ", " "],
      [" ", " ", " "],
    ]);
  });
  test("사용자가 U를 입력하고 정답이 U라면 입력값으로 받은 색인의 bridge에 O표시", () => {
    const bridge = BridgeConverter.makeEmptyBridge(3);
    BridgeConverter.writeBridgeU("U", 0, bridge);
    expect(bridge).toEqual([
      ["O", " ", " "],
      [" ", " ", " "],
    ]);
  });
  test("사용자가 D를 입력하고 정답이 U라면 입력값으로 받은 색인의 bridge에 X표시", () => {
    const bridge = BridgeConverter.makeEmptyBridge(3);
    BridgeConverter.writeBridgeU("D", 0, bridge);
    expect(bridge).toEqual([
      ["X", " ", " "],
      [" ", " ", " "],
    ]);
  });
  test("사용자가 D를 입력하고 정답이 D라면 입력값으로 받은 색인의 bridge에 O표시", () => {
    const bridge = BridgeConverter.makeEmptyBridge(3);
    BridgeConverter.writeBridgeD("D", 0, bridge);
    expect(bridge).toEqual([
      [" ", " ", " "],
      ["O", " ", " "],
    ]);
  });
  test("사용자가 U를 입력하고 정답이 D라면 입력값으로 받은 색인의 bridge에 X표시", () => {
    const bridge = BridgeConverter.makeEmptyBridge(3);
    BridgeConverter.writeBridgeD("U", 0, bridge);
    expect(bridge).toEqual([
      [" ", " ", " "],
      ["X", " ", " "],
    ]);
  });
});
