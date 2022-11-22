const BridgeGame = require("../src/BridgeGame");
describe("BridgeGame 클래스 테스트", () => {
  describe("compare함수 테스트", () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.setBridge(["U", "D", "U", "U"]);
    test("정답인 다리와 입력 값이 일치하는 경우 True 리턴", () => {
      const input = "U";
      expect(bridgeGame.compareBridge(input)).toEqual(true);
    });
    test("정답인 다리와 입력 값이 일치하는 경우 False 리턴", () => {
      const input = "D";
      expect(bridgeGame.compareBridge(input)).toEqual(false);
    });
  });
});
