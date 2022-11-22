const BridgeGame = require("../src/BridgeGame");
describe("X 값 유무 테스트", () => {
  test("X 값이 있을 경우", () => {
    const BRIDGEGAME = new BridgeGame();
    expect(BRIDGEGAME.retry(["O", " ", "X"], [" ", "O", " "])).toBe(true);
  });
  test("X 값이 있을 경우", () => {
    const BRIDGEGAME = new BridgeGame();
    expect(BRIDGEGAME.retry(["O", " ", "O"], [" ", "O", " "])).toBe(false);
  });
});
