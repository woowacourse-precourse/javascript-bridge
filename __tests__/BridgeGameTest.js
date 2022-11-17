const BridgeGame = require("../src/BridgeGame");

describe("다리 건너기 게임을 관리하는 클래스 테스트", () => {
  test("사용자가 올바르게 이동했을 때 현재까지 건넌 다리 지도", () => {
    const playerChoiceMovingCommands = ["U", "D", "D", "D"];
    const upsideBridgeMap = ["O", " ", " ", " "];
    const downSideBridgeMap = [" ", "O", "O", "O"];

    const bridgeGame = new BridgeGame();
    bridgeGame.setBridgeShape(["U", "D", "D", "D", "U"]);

    playerChoiceMovingCommands.forEach((playerChoiceMovingCommand) => {
      bridgeGame.move(playerChoiceMovingCommand);
    });

    expect(bridgeGame.getCurrentBridgeMap().upsideBridgeMap).toEqual(
      upsideBridgeMap
    );
    expect(bridgeGame.getCurrentBridgeMap().downsideBridgeMap).toEqual(
      downSideBridgeMap
    );
  });

  test("사용자가 이동할 수 없는 칸을 선택했을 때 현재까지 건넌 다리 지도", () => {
    const playerChoiceMovingCommands = ["U", "D", "U"];
    const upsideBridgeMap = ["O", " ", "X"];
    const downSideBridgeMap = [" ", "O", " "];

    const bridgeGame = new BridgeGame();
    bridgeGame.setBridgeShape(["U", "D", "D", "D", "U"]);

    playerChoiceMovingCommands.forEach((playerChoiceMovingCommand) => {
      bridgeGame.move(playerChoiceMovingCommand);
    });

    expect(bridgeGame.getCurrentBridgeMap().upsideBridgeMap).toEqual(
      upsideBridgeMap
    );
    expect(bridgeGame.getCurrentBridgeMap().downsideBridgeMap).toEqual(
      downSideBridgeMap
    );
  });
});
