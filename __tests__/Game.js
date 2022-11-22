const Game = require("../src/Component/Game");

describe("Game component 테스트", () => {
  const game = new Game(3);

  test("getPlayCount 테스트", () => {
    const PLAY_COUNT = game.getPlayCount;
    expect(PLAY_COUNT).toEqual(1);
  });

  test("increasePlayCount 테스트", () => {
    game.increasePlayCount();
    const PLAY_COUNT = game.getPlayCount;
    expect(PLAY_COUNT).toEqual(2);
  });
});
