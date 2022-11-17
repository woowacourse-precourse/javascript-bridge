const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame 테스트", () => {
  test("다리 길이 잘못된 사이즈 입력시 에러 테스트", () => {
    expect(() => {
      const bridgeGame = new BridgeGame();
      bridgeGame.getBridgeSize("r");
    }).toThrow("[ERROR]");
  });
  describe("다리 길이 범위 외 숫자 입력시 에러 테스트", () => {
    test("20보다 큰 숫자 입력시 에러 테스트", () => {
      expect(() => {
        const bridgeGame = new BridgeGame();
        bridgeGame.getBridgeSize("21");
      }).toThrow("[ERROR]");
    });
    test("3보다 큰 작은 숫자 입력시 에러 테스트", () => {
      expect(() => {
        const bridgeGame = new BridgeGame();
        bridgeGame.getBridgeSize("2");
      }).toThrow("[ERROR]");
    });
  });
  test("다리 이동 입력 에러 테스트", () => {
    expect(() => {
      const bridgeGame = new BridgeGame();
      bridgeGame.move("R");
    }).toThrow("[ERROR]");
  });
  test("재시작 입력 에러 테스트", () => {
    expect(() => {
      const bridgeGame = new BridgeGame();
      bridgeGame.retry("U");
    }).toThrow("[ERROR]");
  });
});
