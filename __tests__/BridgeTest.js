const Bridge = require("../src/Bridge");
const Player = require("../src/Player");

describe("다리 클래스 테스트", () => {
  test("플레이어의 다음 칸 방향 얻기", () => {
    const path = ["U", "U", "D", "D", "U"];

    const bridge = new Bridge(path);
    const player = new Player();

    const directionFirst = bridge.getNextDirection(player);
    player.move("U");
    const directionSecond = bridge.getNextDirection(player);
    player.move("U");
    const directionThird = bridge.getNextDirection(player);

    expect(directionFirst).toEqual("U");
    expect(directionSecond).toEqual("U");
    expect(directionThird).toEqual("D");
  });

  test("플레이어가 다리의 끝에 섰는지 확인", () => {
    const path = ["U", "U", "U"];

    const bridge = new Bridge(path);
    const player = new Player();

    player.move("U");
    player.move("U");
    const twiceMove = bridge.isLastPosition(player);
    player.move("U");
    const threeTimesMove = bridge.isLastPosition(player);

    expect(twiceMove).toBeFalsy();
    expect(threeTimesMove).toBeTruthy();
  });
});
