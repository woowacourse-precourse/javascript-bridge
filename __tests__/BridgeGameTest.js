const App = require("../src/App");

describe("BridgeGame 클래스 테스트", () => {
  test("올바른 다리를 건너는지 확인하는 기능", () => {
    const app = new App();
    app.play();

    const bridgeGame = app.getBridgeGame();
    const result = bridgeGame.check("U");

    expect(result).toEqual({ up: "X", down: " " });
  });

  test("다리를 한칸 움직이는 기능", () => {
    const app = new App();
    app.play();

    const bridgeGame = app.getBridgeGame();
    bridgeGame.move("U");

    const upBridge = bridgeGame.getBridgeResult().upResult.length;
    const downBridge = bridgeGame.getBridgeResult().downResult.length;

    expect(upBridge).toEqual(1);
    expect(downBridge).toEqual(1);
  });

  test("게임을 재시작 시키는 기능", () => {
    const app = new App();
    app.play();

    const bridgeGame = app.getBridgeGame();
    bridgeGame.retry("R");

    expect(bridgeGame.getStatus()).toEqual("move");
  });
});
