const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame class 테스트", () => {
  test("사용자가 올바르게 이동했을 때 현재까지 건넌 다리 지도", () => {
    const movingCommands = ["U", "D", "D", "D"];
    const upsideBridgeMap = ["O", " ", " ", " "];
    const downSideBridgeMap = [" ", "O", "O", "O"];
    const bridgeAnswerDirections = ["U", "D", "D", "D", "U"];

    const bridgeGame = new BridgeGame();
    bridgeGame.setAnswerDirections(bridgeAnswerDirections);
    movingCommands.forEach((playerChoiceMovingCommand) => {
      bridgeGame.move(playerChoiceMovingCommand);
    });

    expect(bridgeGame.getCorssedBridgeMap().upside).toEqual(upsideBridgeMap);
    expect(bridgeGame.getCorssedBridgeMap().downside).toEqual(
      downSideBridgeMap
    );
  });

  test("사용자가 이동할 수 없는 칸을 선택했을 때 현재까지 건넌 다리 지도", () => {
    const movingCommands = ["U", "D", "U"];
    const upsideBridgeMap = ["O", " ", "X"];
    const downSideBridgeMap = [" ", "O", " "];
    const bridgeAnswerDirections = ["U", "D", "D", "D", "U"];

    const bridgeGame = new BridgeGame();
    bridgeGame.setAnswerDirections(bridgeAnswerDirections);
    movingCommands.forEach((playerChoiceMovingCommand) => {
      bridgeGame.move(playerChoiceMovingCommand);
    });

    expect(bridgeGame.getCorssedBridgeMap().upside).toEqual(upsideBridgeMap);
    expect(bridgeGame.getCorssedBridgeMap().downside).toEqual(
      downSideBridgeMap
    );
  });

  test("다리를 끝까지 올바르게 건넜는지 테스트", () => {
    const bridgeAnswerDirections = ["U", "D", "D", "D", "U"];

    const bridgeGame = new BridgeGame();
    bridgeGame.setAnswerDirections(bridgeAnswerDirections);
    bridgeAnswerDirections.forEach((playerChoiceMovingCommand) => {
      bridgeGame.move(playerChoiceMovingCommand);
    });

    expect(bridgeGame.isGameSuccess()).toBeTruthy();
  });

  test("이동할 수 있는 칸을 선택했는지 테스트", () => {
    const movingCommands = ["U", "D", "D", "D"];
    const bridgeAnswerDirections = ["U", "D", "D", "D", "U"];

    const bridgeGame = new BridgeGame();
    bridgeGame.setAnswerDirections(bridgeAnswerDirections);

    movingCommands.forEach((playerChoiceMovingCommand) => {
      bridgeGame.move(playerChoiceMovingCommand);
      expect(bridgeGame.isAnswerMovingCommand()).toBeTruthy();
    });

    bridgeGame.move("D");
    expect(bridgeGame.isAnswerMovingCommand()).toBeFalsy();
  });
});
