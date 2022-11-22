const BridgeGame = require("../src/BridgeGame");

describe("다리 게임 클래스 테스트", () => {
  const bridge = ["U", "U", "D", "D", "U"];

  test("move 메서드는 현재 위치를 1씩 증가시킨다.", () => {
    const bridgeGame = new BridgeGame(bridge);
    const rap = 4;

    for (let i = 0; i < rap; i++) {
      expect(bridgeGame.currentPosition).toEqual(i);
      bridgeGame.move();
    }
  });

  test("move 메서드는 현재 위치가 정답 다리길이를 넘지 않을 때만 현재 위치를 증가시킬 수 있다.", () => {
    const bridgeGame = new BridgeGame(bridge);
    const rap = 10;

    for (let i = 0; i < rap; i++) {
      bridgeGame.move();
    }

    expect(bridgeGame.currentPosition).toEqual(5);
  });

  test("retry 메서드는 총 시도횟수를 1 더하고, 현재 위치를 0으로 초기화시킨다.", () => {
    const bridgeGame = new BridgeGame(bridge);
    const rap = 10;

    for (let i = 0; i < rap; i++) {
      bridgeGame.move();
    }

    bridgeGame.retry();

    expect(bridgeGame.currentPosition).toEqual(0);
    expect(bridgeGame.totalTrial).toEqual(2);
  });

  test("getCorrectDirection 메서드는 현재 위치에서의 정답 값을 반환한다.", () => {
    const bridgeGame = new BridgeGame(bridge);
    const rap = 4;

    for (let i = 0; i < rap; i++) {
      expect(bridgeGame.getCorrectDirection()).toEqual(bridge[i]);
      bridgeGame.move();
    }
  });

  test("getIsLastPosition 메서드는 현재 위치가 마지막 위치인지를 boolean 타입으로 반환한다.", () => {
    const bridgeGame = new BridgeGame(bridge);

    const rap = 4;

    for (let i = 0; i <= rap; i++) {
      if (i !== 5) expect(bridgeGame.getIsLastPosition()).toEqual(false);
      if (i == 5) expect(bridgeGame.getIsLastPosition()).toEqual(true);
      bridgeGame.move();
    }
  });

  test("getTotalTrial 메서드는 유저의 게임 시도 횟수를 반환한다.", () => {
    const bridgeGame = new BridgeGame(bridge);
    const rap = 6;

    for (let i = 0; i < rap; i++) {
      bridgeGame.retry();
    }

    expect(bridgeGame.totalTrial).toEqual(7);
  });

  test("getCrossState 메서드는 현재 위치까지의 정답 배열을 잘라 반환한다.", () => {
    const bridgeGame = new BridgeGame(bridge);
    const rap = 4;

    for (let i = 0; i <= rap; i++) {
      expect(bridgeGame.getCrossState()).toEqual(
        bridge.filter((v, index) => index < i)
      );
      bridgeGame.move();
    }
  });

  test("getCrossState 메서드에 failed가 전달되면 현재 위치의 정답에 X를 붙인 배열을 반환한다.", () => {
    const bridgeGame = new BridgeGame(bridge);
    const rap = 4;

    for (let i = 0; i < rap; i++) {
      const expectArray = bridge.filter((v, index) => index < i);

      expectArray.push(`X${bridge[i]}`);

      expect(bridgeGame.getCrossState("failed")).toEqual(expectArray);

      bridgeGame.move();
    }
  });
});
