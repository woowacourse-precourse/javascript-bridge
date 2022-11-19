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
  test("사용자의 입력값과 정답을 비교해서 [[],[]]형태의 배열을 생성", () => {
    const answer = ["U", "D", "D"];
    const inputs = ["U", "D", "U"];

    expect(BridgeConverter.convertToBridge(answer, inputs)).toEqual([
      ["O", " ", "X"],
      [" ", "O", " "],
    ]);
  });
  test("U와 D로 구성된 [[],[]] 형태의 배열을 출력물 형태로 변환", () => {
    const answer = ["U", "D", "D"];
    const inputs = ["U", "D", "U"];
    expect(BridgeConverter.stringifyBridge(answer, inputs)).toContain(
      `[ O |   | X ]\n[   | O |   ]`
    );
  });
});
