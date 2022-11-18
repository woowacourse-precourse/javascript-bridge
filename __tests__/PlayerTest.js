const Player = require("../src/Player");

describe("플레이어 상태 테스트", () => {
  test("위쪽 다리를 맞출 경우 상태 테스트", () => {
    Player.checkUpperBridgeCorrect("U", true);
    expect(Player.state).toStrictEqual([[" O "], ["   "]]);
  });

  test("위쪽 다리를 틀릴 경우 상태 테스트", () => {
    Player.checkUpperBridgeWrong("U", false);
    expect(Player.state).toStrictEqual([
      [" O ", " X "],
      ["   ", "   "],
    ]);
  });

  test("아래 다리를 맞출 경우 상태 테스트", () => {
    Player.checkLowerBridgeCorrect("D", true);
    expect(Player.state).toStrictEqual([
      [" O ", " X ", "   "],
      ["   ", "   ", " O "],
    ]);
  });

  test("아래 다리를 틀릴 경우 상태 테스트", () => {
    Player.checkLowerBridgeWrong("D", false);
    expect(Player.state).toStrictEqual([
      [" O ", " X ", "   ", "   "],
      ["   ", "   ", " O ", " X "],
    ]);
  });

  test("다리 길이 업데이트 테스트", () => {
    Player.updateSize(3);
    expect(Player.size).toBe(3);
  });
});
