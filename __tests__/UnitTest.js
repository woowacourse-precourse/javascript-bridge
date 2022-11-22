const BridgeGame = require("../src/BridgeGame");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const InputView = require("../src/InputView");

describe("BridgeGame UnitTest", () => {
  test("move 메소드 테스트", () => {
    const game = new BridgeGame();
    const bridge = ["U", "D", "D", "U"];
    expect(game.move("U", bridge, 0)).toEqual("upSuccess");
    expect(game.move("U", bridge, 1)).toEqual("upFail");
    expect(game.move("D", bridge, 2)).toEqual("downSuccess");
    expect(game.move("D", bridge, 3)).toEqual("downFail");
  });

  test("retry 메소드 테스트", () => {
    const game = new BridgeGame();
    expect(game.retry("R")).toBeTruthy();
    expect(game.retry("Q")).toBeFalsy();
  });
});
