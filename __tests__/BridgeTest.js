const Bridge = require("../src/Bridge");
const Player = require("../src/Player");

const getMovedPlayer = (moveCount) => {
  const player = new Player();
  for (let count = 0; count < moveCount; count++) {
    player.move("U");
  }
  return player;
};

describe("다리 클래스 테스트", () => {
  test("플레이어의 다음 칸 방향 얻기", () => {
    const bridge = new Bridge(["U", "U", "D", "D", "U"]);

    const playerNotMoving = new Player();
    const playerMovedOnce = getMovedPlayer(1);
    const playerMovedTwice = getMovedPlayer(2);

    expect(bridge.getNextDirection(playerNotMoving)).toEqual("U");
    expect(bridge.getNextDirection(playerMovedOnce)).toEqual("U");
    expect(bridge.getNextDirection(playerMovedTwice)).toEqual("D");
  });

  test("플레이어가 다리의 끝에 섰는지 확인", () => {
    const bridge = new Bridge(["U", "U", "U"]);

    const playerMovedOnce = getMovedPlayer(1);
    const playerMovedThreeTimes = getMovedPlayer(3);

    expect(bridge.isLastPosition(playerMovedOnce)).toBeFalsy();
    expect(bridge.isLastPosition(playerMovedThreeTimes)).toBeTruthy();
  });
});
