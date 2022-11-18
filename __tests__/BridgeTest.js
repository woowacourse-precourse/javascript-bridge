const BridgeGame = require("../src/BridgeGame");

describe(" 다리 테스트 ", () => {
  test("fillMap 테스트", () => {
    const bridge = ["D", "U", "D"];
    const bridgeGame = new BridgeGame(bridge);
    const inputs = ["D", "U", "U"];
    const results = [
      [["O"], [" "]],
      [
        ["O", " "],
        [" ", "O"],
      ],
      [
        ["O", " ", " "],
        [" ", "O", "X"],
      ],
    ];
    inputs.forEach((input, idx) => {
      bridgeGame.canMove(input);
      expect(bridgeGame.getBridgeMap()).toEqual(results[idx]);
    });
  });
});
