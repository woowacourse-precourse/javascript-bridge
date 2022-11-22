const Bridge = require("../src/domain/Bridge");
const Player = require("../src/domain/Player");

const getMovedPlayer = (moveCount) => {
  const player = new Player();
  for (let count = 0; count < moveCount; count++) {
    player.move("U");
  }
  return player;
};

describe("Bridge 클래스 테스트", () => {
  test("getNextDirection(): 플레이어의 다음 칸 방향 얻기", () => {
    const bridge = new Bridge(["U", "U", "D", "D", "U"]);

    const playerNotMoving = getMovedPlayer(0);
    const playerMovedOnce = getMovedPlayer(1);
    const playerMovedTwice = getMovedPlayer(2);

    expect(bridge.getNextDirection(playerNotMoving)).toEqual("U");
    expect(bridge.getNextDirection(playerMovedOnce)).toEqual("U");
    expect(bridge.getNextDirection(playerMovedTwice)).toEqual("D");
  });

  test("isLastPosition(): 플레이어가 다리의 끝에 섰는지 확인", () => {
    const bridge = new Bridge(["U", "U", "U"]);

    const playerMovedOnce = getMovedPlayer(1);
    const playerMovedThreeTimes = getMovedPlayer(3);

    expect(bridge.isLastPosition(playerMovedOnce)).toBeFalsy();
    expect(bridge.isLastPosition(playerMovedThreeTimes)).toBeTruthy();
  });
});
