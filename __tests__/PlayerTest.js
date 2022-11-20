const Player = require("../src/Player");

describe("플레이어 상태 테스트", () => {
  test("플레이어가 선택한 길이 저장되는지 테스트", () => {
    Player.updateMovingArr("U");
    expect(Player.movingArr).toStrictEqual(["U"]);
  });

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
    Player.getSize(3);
    expect(Player.size).toBe(3);
  });

  test("게임 성공 여부 반환 테스트", () => {
    Player.gameSuccess = true;
    expect(Player.getGameSuccess()).toBeTruthy();
  });

  test("플레이어가 선택한 다리 상태 반환 테스트", () => {
    Player.movingArr = ["U", "D", "U"];
    expect(Player.getMovingArr()).toStrictEqual(["U", "D", "U"]);
  });

  test("플레이어가 선택한 다리 정답 상태 반환 테스트", () => {
    Player.state = [[" O "], ["  "]];
    expect(Player.getState()).toStrictEqual([[" O "], ["  "]]);
  });

  test("게임 성공 여부 업데이트 테스트", () => {
    Player.playerAns = [true, true, true];
    Player.size = 3;

    Player.checkGameSuccess();
    expect(Player.gameSuccess).toBe(true);
  });

  test("게임 재시작 테스트", () => {
    Player.reset();

    expect(Player.state).toStrictEqual([[], []]);
    expect(Player.movingArr).toStrictEqual([]);
    expect(Player.playerAns).toStrictEqual([]);
    expect(Player.tryingCount).toBe(2);
  });
});
