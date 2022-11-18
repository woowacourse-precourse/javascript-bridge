const BridgeGame = require("../src/BridgeGame");

describe(" 다리 테스트 ", () => {
  test("fillResultMap 테스트", () => {
    const bridge = ["0", "1", "0"]; //D,U,D,D
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
      bridgeGame.transInputtoPosition(input);
      expect(bridgeGame.getResultMap()).toEqual(results[idx]);
    });
  });
});
