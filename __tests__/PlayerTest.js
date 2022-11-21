const Player = require("../src/Player");

describe("플레이어 상태 테스트", () => {
  test("플레이어가 선택한 길이 저장되는지 테스트", () => {
    Player.updateMovingArray("U");
    expect(Player.movingArray).toStrictEqual(["U"]);
  });

  test("위쪽 다리를 맞출 경우 상태 테스트", () => {
    Player.checkUpperBridgeCorrect("U", true);
    expect(Player.bridgeStateArray).toStrictEqual([["   "], [" O "]]);
  });

  test("위쪽 다리를 틀릴 경우 상태 테스트", () => {
    Player.checkUpperBridgeWrong("U", false);
    expect(Player.bridgeStateArray).toStrictEqual([
      ["   ", "   "],
      [" O ", " X "],
    ]);
  });

  test("아래 다리를 맞출 경우 상태 테스트", () => {
    Player.checkLowerBridgeCorrect("D", true);
    expect(Player.bridgeStateArray).toStrictEqual([
      ["   ", "   ", " O "],
      [" O ", " X ", "   "],
    ]);
  });

  test("아래 다리를 틀릴 경우 상태 테스트", () => {
    Player.checkLowerBridgeWrong("D", false);
    expect(Player.bridgeStateArray).toStrictEqual([
      ["   ", "   ", " O ", " X "],
      [" O ", " X ", "   ", "   "],
    ]);
  });

  test("다리 길이 업데이트 테스트", () => {
    Player.setSize(3);
    expect(Player.size).toBe(3);
  });

  test("게임 성공 여부 반환 테스트", () => {
    Player.gameSuccess = true;
    expect(Player.getGameSuccess()).toBeTruthy();
  });

  test("플레이어가 선택한 다리 상태 반환 테스트", () => {
    Player.movingArray = ["U", "D", "U"];
    expect(Player.getMovingArray()).toStrictEqual(["U", "D", "U"]);
  });

  test("플레이어가 선택한 다리 정답 상태 반환 테스트", () => {
    Player.bridgeStateArray = [[" O "], ["  "]];
    expect(Player.getBridgeStateArray()).toStrictEqual([[" O "], ["  "]]);
  });

  test("플레이어가 게임을 시도한 횟수 반환 테스트", () => {
    expect(Player.getTryingCount()).toBe(1);
  });

  test("게임 성공 여부 업데이트 테스트", () => {
    Player.playerAns = [true, true, true];
    Player.size = 3;

    Player.checkGameSuccess();
    expect(Player.gameSuccess).toBe(true);
  });

  test("게임 재시작 테스트", () => {
    Player.reset();

    expect(Player.bridgeStateArray).toStrictEqual([[], []]);
    expect(Player.movingArray).toStrictEqual([]);
    expect(Player.correctStateArray).toStrictEqual([]);
    expect(Player.tryingCount).toBe(2);
  });
});
