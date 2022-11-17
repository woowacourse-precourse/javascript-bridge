const BridgeGameModel = require("../src/Model/BridgeGameModel.js");

describe("BridgeGameModel 클래스 테스트", () => {
  test("유저가 'U'를 입력할 때, jumpUp 메서드로 데이터를 가공한다.", () => {
    const bridgeGameModel = new BridgeGameModel();

    expect(bridgeGameModel.jumpUp()).toEqual({ user: ["U"], bridge: [] });
  });

  test("유저가 'D'를 입력할 때, jumpDown 메서드로 데이터를 가공한다.", () => {
    const bridgeGameModel = new BridgeGameModel();

    expect(bridgeGameModel.jumpDown()).toEqual({ user: ["D"], bridge: [] });
  });
});
