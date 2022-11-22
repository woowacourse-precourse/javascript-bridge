const Player = require("../src/domain/Player");

describe("Player 클래스 테스트", () => {
  test("getCurrentPosition(): 플레이어가 두 번 이동했다면 플레이어의 위치는 2", () => {
    const route = ["U", "D"];
    const player = new Player();

    route.forEach((direction) => {
      player.move(direction);
    });

    const playerPosition = player.getCurrentPosition();
    expect(playerPosition).toEqual(2);
  });

  test("getCurrentPosition(): 플레이어가 다섯 번 이동했다면 플레이어의 위치는 5", () => {
    const route = ["U", "D", "U", "U", "U"];
    const player = new Player();

    route.forEach((direction) => {
      player.move(direction);
    });

    const playerPosition = player.getCurrentPosition();
    expect(playerPosition).toEqual(5);
  });

  test("getMap(): 플레이어가 두 번 이동했을 때 지도 가져오기", () => {
    const route = ["U", "D"];
    const player = new Player();

    route.forEach((direction) => {
      player.move(direction);
    });

    const [upperBridge, lowerBridge] = player.getMap();
    expect(upperBridge).toEqual("[ O |   ]");
    expect(lowerBridge).toEqual("[   | O ]");
  });

  test("getMap(): 플레이어가 다섯 번 이동했을 때 지도 가져오기", () => {
    const route = ["U", "D", "U", "U", "U"];
    const player = new Player();

    route.forEach((direction) => {
      player.move(direction);
    });

    const [upperBridge, lowerBridge] = player.getMap();
    expect(upperBridge).toEqual("[ O |   | O | O | O ]");
    expect(lowerBridge).toEqual("[   | O |   |   |   ]");
  });

  test("fall(), getMap(): 플레이어가 두번 이동 후 잘못된 길로 빠졌을 때 때 지도 가져오기", () => {
    const route = ["U", "D"];
    const player = new Player();

    route.forEach((direction) => {
      player.move(direction);
    });
    player.fall("U");

    const [upperBridge, lowerBridge] = player.getMap();
    expect(upperBridge).toEqual("[ O |   | X ]");
    expect(lowerBridge).toEqual("[   | O |   ]");
  });

  test("fall(), getMap(): 플레이어가 다섯 번 이동, 아웃 되었을 때 지도 가져오기", () => {
    const route = ["U", "D", "U", "U", "U"];
    const player = new Player();

    route.forEach((direction) => {
      player.move(direction);
    });
    player.fall("D");

    const [upperBridge, lowerBridge] = player.getMap();
    expect(upperBridge).toEqual("[ O |   | O | O | O |   ]");
    expect(lowerBridge).toEqual("[   | O |   |   |   | X ]");
  });
});
