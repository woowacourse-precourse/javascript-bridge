const BridgeGame = require("../src/BridgeGame");

describe(" 다리 테스트 ", () => {
  test("move 테스트", () => {
    const bridge = ["0", "1", "0", "0"]; //D,U,D,D
    const bridgeGame = new BridgeGame(bridge);
    const states = ["D", "U", "U", "D"];
    const result = ["O", "O", "X", "O"];

    states.forEach((state, idx) => {
      expect(bridgeGame.move(state)).toEqual(result[idx]);
    });
  });
});
