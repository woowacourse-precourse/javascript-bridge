const BridgeGameModel = require("../src/model/BridgeGameModel.js");

describe("BridgeGameModel 클래스 테스트", () => {
  test("유저가 'U'를 입력할 때, jump 메서드로 데이터를 가공한다.", () => {
    const bridgeGameModel = new BridgeGameModel();

    expect(bridgeGameModel.update("U")).toEqual({
      directions: ["U"],
      bridge: [],
      pass: false,
    });
  });

  test("유저가 'D'를 입력할 때, jump 메서드로 데이터를 가공한다.", () => {
    const bridgeGameModel = new BridgeGameModel();

    expect(bridgeGameModel.update("D")).toEqual({
      directions: ["D"],
      bridge: [],
      pass: false,
    });
  });

  test.each([["U"], ["U", "D"]])(
    "메세지를 통해 유효한 bridge 데이터인지 확인하고 유효하지 않다면 Error를 던진다.",
    (input) => {
      expect(() => {
        const bridgeGameModel = new BridgeGameModel();
        bridgeGameModel.checkBridge(input);
      }).toThrow("[ERROR]");
    }
  );

  test.each(["", "Q", "?", "-1000", "1123", "10.1", "p", "u", "d", "U1"])(
    "메세지를 통해 유효한 user 데이터인지 확인하고 유효하지 않다면 Error를 던진다.",
    (input) => {
      expect(() => {
        const bridgeGameModel = new BridgeGameModel();
        bridgeGameModel.checkDirection(input);
      }).toThrow("[ERROR]");
    }
  );
});
