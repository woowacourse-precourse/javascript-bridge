const Player = require("../src/Player");

describe("플레이어 클래스 테스트", () => {
  test("플레이어가 두 번 이동했다면 플레이어의 위치는 2", () => {
    const player = new Player();
    player.move("U");
    player.move("D");

    const playerPosition = player.getCurrentPosition();
    expect(playerPosition).toEqual(2);
  });

  test("플레이어가 다섯 번 이동했다면 플레이어의 위치는 5", () => {
    const player = new Player();
    player.move("U");
    player.move("D");
    player.move("U");
    player.move("U");
    player.move("U");

    const playerPosition = player.getCurrentPosition();
    expect(playerPosition).toEqual(5);
  });

  test("플레이어가 두 번 이동했을 때 지도 가져오기", () => {
    const player = new Player();
    player.move("U");
    player.move("D");

    const [upperBridge, lowerBridge] = player.getMap();
    expect(upperBridge).toEqual("[ O |   ]");
    expect(lowerBridge).toEqual("[   | O ]");
  });

  test("플레이어가 다섯 번 이동했을 때 지도 가져오기", () => {
    const player = new Player();
    player.move("U");
    player.move("D");
    player.move("U");
    player.move("U");
    player.move("U");

    const [upperBridge, lowerBridge] = player.getMap();
    expect(upperBridge).toEqual("[ O |   | O | O | O ]");
    expect(lowerBridge).toEqual("[   | O |   |   |   ]");
  });

  test("플레이어가 두 번 이동, 아웃 되었을 때 지도 가져오기", () => {
    const player = new Player();
    player.move("U");
    player.move("D");
    player.out("U");

    const [upperBridge, lowerBridge] = player.getMap();
    expect(upperBridge).toEqual("[ O |   | X ]");
    expect(lowerBridge).toEqual("[   | O |   ]");
  });

  test("플레이어가 다섯 번 이동, 아웃 되었을 때 지도 가져오기", () => {
    const player = new Player();
    player.move("U");
    player.move("D");
    player.move("U");
    player.move("U");
    player.move("U");
    player.out("D");

    const [upperBridge, lowerBridge] = player.getMap();
    expect(upperBridge).toEqual("[ O |   | O | O | O |   ]");
    expect(lowerBridge).toEqual("[   | O |   |   |   | X ]");
  });
});
