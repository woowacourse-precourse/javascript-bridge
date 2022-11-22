const Bridge = require("../src/Model/Bridge");

describe("Bridge 클래스 테스트", () => {
  test("플레이어의 위치가 다리의 마지막 위치인 경우", () => {
    const bridge = new Bridge(["U", "U", "D", "D"]);
    const playerBridgeStateLength = 4;

    const isLast = bridge.isLastPosition(playerBridgeStateLength);

    expect(isLast).toBe(true);
  });

  test("플레이어의 위치가 다리의 마지막 위치가 아닌 경우", () => {
    const bridge = new Bridge(["U", "U", "D", "D"]);
    const playerStateLength = 2;

    const isLast = bridge.isLastPosition(playerStateLength);

    expect(isLast).toBe(false);
  });

  test("플레이어가 이동하려는 방향이 다리의 건널 수 있는 방향과 같은 경우", () => {
    const bridge = new Bridge(["U", "U", "D", "D"]);
    const currPosition = 3;

    const isSame = bridge.isSameDirection("D", currPosition);

    expect(isSame).toBe(true);
  });

  test("플레이어가 이동하려는 방향이 다리의 건널 수 있는 방향과 다른 경우", () => {
    const bridge = new Bridge(["U", "U", "D"]);
    const currPosition = 1;

    const isSame = bridge.isSameDirection("D", 1);

    expect(isSame).toBe(false);
  });
});
