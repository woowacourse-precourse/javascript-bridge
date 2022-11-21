const BridgeGame = require("../src/BridgeGame");

describe("기능 테스트", () => {
  test("다리 생성 테스트", () => {
    const bridgeGame = new BridgeGame();

    expect(bridgeGame.createBridge(5)).toHaveLength(5);
  });

  test("이동 테스트", () => {
    const bridgeGame = new BridgeGame();

    bridgeGame.setBridge(["U", "U", "U"]);
    bridgeGame.setBridgeResult([[], []]);

    expect(bridgeGame.move("U", 0)).toEqual([["O"], [" "]]);
  });

  test("O 또는 X가 bridgeResult에 들어갔는지 테스트", () => {
    const bridgeGame = new BridgeGame();

    bridgeGame.setBridge(["U", "U", "U"]);
    bridgeGame.setBridgeResult([[], []]);
    bridgeGame.bridgeOX("U", 0);

    expect(bridgeGame.getBridgeResult()).toEqual([["O"], []]);
  });

  test("O 또는 X 리턴 테스트", () => {
    const bridgeGame = new BridgeGame();

    bridgeGame.setBridge(["U", "D"]);
    expect(bridgeGame.returnXOrO("D", 1)).toEqual("O");
  });

  test("공백 추가 테스트", () => {
    const bridgeGame = new BridgeGame();

    bridgeGame.setBridgeResult([["O", "O"], [" "]]);
    bridgeGame.bridgeBlank();

    expect(bridgeGame.getBridgeResult()).toEqual([
      ["O", "O"],
      [" ", " "],
    ]);
  });

  test("", () => {
    const bridgeGame = new BridgeGame();

    bridgeGame.setBridgeResult(["O", "X"], [" ", " "]);
    bridgeGame.retry();

    expect(bridgeGame.getBridgeResult()).toEqual([[], []]);
  });
});
