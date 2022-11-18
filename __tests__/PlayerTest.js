const Player = require("../src/Player");

describe("플레이어 상태 테스트", () => {
  test("위쪽 다리를 맞출 경우 테스트", () => {
    Player.checkUpperBridgeCorrect("U", true);
    expect(Player.state).toStrictEqual([[" O "], ["   "]]);
  });
});
