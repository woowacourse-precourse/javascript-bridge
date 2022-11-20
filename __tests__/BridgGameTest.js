const BridgeGame = require("../src/BridgeGame.js");

describe("BridgeGame의 테스트", () => {
  test("move시 bridge와 inputs의 값이 반환", () => {
    const game = new BridgeGame();
    game.start(3);

    const result1 = game.move("U");
    expect(result1.bridge.length).toBe(1);
    expect(result1.inputs.length).toBe(1);

    const result2 = game.move("U");
    expect(result2.bridge.length).toBe(2);
    expect(result2.inputs.length).toBe(2);

    const result3 = game.move("U");
    expect(result3.bridge.length).toBe(3);
    expect(result3.inputs.length).toBe(3);
  });

  test("retry를 할 경우 inputs와 trial이 초기화", () => {
    const game = new BridgeGame();
    game.start(5);

    game.move("D");
    game.move("D");
    game.move("D");

    game.retry();

    const results = game.end();
    expect(results.bridge.length).toBe(0);
    expect(results.inputs.length).toBe(0);
    expect(results.trial).toBe(2);
  });

  test("game을 종료할 경우 move한 만큼을 반환", () => {
    const game = new BridgeGame();
    game.start(5);

    game.move("U");
    game.move("U");

    const results = game.end();
    expect(results.bridge.length).toBe(2);
    expect(results.inputs.length).toBe(2);
    expect(results.trial).toBe(1);
  });
});
