const BridgeGame = require("../../src/domain/BridgeGame");
const Bridge = require("../../src/domain/Bridge")

describe("BridgeGame 클래스 테스트", () => {

  test("사용자 입력이 건널 수 있는 칸인 지 아닌 지 확인한다.(첫번 째, 두번째 칸 검증)",() => {
    const bridgeGame = new BridgeGame(new Bridge(["D", "U", "D", "D"]));

      expect(bridgeGame.move("D")).toBeTruthy();
      expect(bridgeGame.move("D")).toBeFalsy();
    }
  );

  test("출력할 다리 맵을 반환하는 지 확인한다.",() => {
    const bridgeGame = new BridgeGame(new Bridge(["U", "D", "U", "D", "D"]));
    bridgeGame.move("U");

    expect(bridgeGame.getMap()).toBe(`[ O ]\n[   ]`);
    }
  );

  test("게임이 종료됐는 지 확인한다.",() => {
    const brdige = ["U", "D", "D"]
    const bridgeGame = new BridgeGame(new Bridge(brdige));
    brdige.forEach(direction => bridgeGame.move(direction));

    expect(bridgeGame.checkGameEnd()).toBeTruthy();
    }
  );

  test("게임 결과를 반환한다.", () => {
    const brdige = ["U", "D", "U", "D"]
    const bridgeGame = new BridgeGame(new Bridge(brdige));
    brdige.forEach(direction => bridgeGame.move(direction));

    expect(bridgeGame.getResult()).toBe("게임 성공 여부: 성공 \n총 시도한 횟수: 1");
  })
});
