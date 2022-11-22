const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame class 테스트", () => {
  test("사용자가 올바르게 이동했을 때 현재까지 건넌 다리 지도", () => {
    const playerChoiceMovingCommands = ["U", "D", "D", "D"];
    const upsideBridgeMap = ["O", " ", " ", " "];
    const downSideBridgeMap = [" ", "O", "O", "O"];
    const bridgeShape = ["U", "D", "D", "D", "U"];

    const bridgeGame = new BridgeGame();
    bridgeGame.setBridgeAnswerDirections(bridgeShape);
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
    const bridgeShape = ["U", "D", "D", "D", "U"];

    const bridgeGame = new BridgeGame();
    bridgeGame.setBridgeAnswerDirections(bridgeShape);
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

  test("다리를 끝까지 올바르게 건넜는지 테스트", () => {
    const bridgeShape = ["U", "D", "D", "D", "U"];

    const bridgeGame = new BridgeGame();
    bridgeGame.setBridgeAnswerDirections(bridgeShape);
    bridgeShape.forEach((playerChoiceMovingCommand) => {
      bridgeGame.move(playerChoiceMovingCommand);
    });

    expect(bridgeGame.isGameSuccess()).toBeTruthy();
  });

  test("이동할 수 있는 칸을 선택했는지 테스트", () => {
    const playerChoiceMovingCommands = ["U", "D", "D", "D"];
    const bridgeShape = ["U", "D", "D", "D", "U"];

    const bridgeGame = new BridgeGame();
    bridgeGame.setBridgeAnswerDirections(bridgeShape);

    playerChoiceMovingCommands.forEach((playerChoiceMovingCommand) => {
      bridgeGame.move(playerChoiceMovingCommand);
      expect(bridgeGame.isAnswerMovingCommand()).toBeTruthy();
    });

    bridgeGame.move("D");
    expect(bridgeGame.isAnswerMovingCommand()).toBeFalsy();
  });
});
