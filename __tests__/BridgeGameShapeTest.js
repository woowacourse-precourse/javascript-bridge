const BridgeGameShape = require("../src/Bridge.Domain/BridgeGameShape");
const { GAME } = require("../src/lib/Const");

describe("다리 게임 성공 모양 만들기 테스트", () => {
  const bridgeGameShape = new BridgeGameShape();
  const bridgeArr = ["U", "U", "D", "D"];
  test("다리 게임 성공 모양 만들기", () => {
    const result = bridgeGameShape
      .getCurrentBridgeGameShape(bridgeArr, GAME.STATUS.PLAY)
      .getCurrentShape();
    expect(result).toBe(`[ O | O |   |   ]\n[   |   | O | O ]`);
  });
  test("다리 게임 성공 위쪽 모양 만들기", () => {
    const result = bridgeGameShape.upBridgeShape(bridgeArr);
    expect(result).toStrictEqual(["O", "O", " ", " "]);
  });

  test("다리 게임 성공 아래쪽 모양 만들기", () => {
    const result = bridgeGameShape.downBridgeShape(bridgeArr);
    expect(result).toStrictEqual([" ", " ", "O", "O"]);
  });
});

describe("다리 게임 실패 모양 만들기 테스트", () => {
  const bridgeGameShape = new BridgeGameShape();
  const bridgeArr = ["U", "U", "D", "U"];

  test("다리 게임 실패 모양 만들기", () => {
    const result = bridgeGameShape
      .getCurrentBridgeGameShape(bridgeArr, GAME.STATUS.FAIL)
      .getCurrentShape();
    expect(result).toBe(`[ O | O |   |   ]\n[   |   | O | X ]`);
  });

  test("다리 게임 실패 아래쪽 모양 만들기", () => {
    const result = bridgeGameShape.downBridgeShapeWhenFail(bridgeArr);
    expect(result).toStrictEqual([" ", " ", "O", "X"]);
  });
});
