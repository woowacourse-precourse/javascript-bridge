const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame 테스트", () => {
  test.each([[-1], [2], [21], [3.5]])("makeBridge 메서드는 입력값이 유효하지 않은 경우 에러 문구를 출력해야 합니다.", (input) => {
    const bridgeGame = new BridgeGame();
    expect(() => {
      bridgeGame.makeBridge(input);
    }).toThrow("[ERROR]");
  });

  test.each([[3], [5], [20]])("makeBridge 메서드는 입력값이 유효한 경우 에러 문구를 출력하지 않아야 합니다.", (input) => {
    const bridgeGame = new BridgeGame();
    expect(() => {
      bridgeGame.makeBridge(input);
    }).not.toThrow("[ERROR]");
  });

  test.each([["u"], ["d"], ["a"], ["A"]])("move 메서드는 입력값이 유효하지 않은 경우 에러 문구를 출력해야 합니다.", (input) => {
    const bridgeGame = new BridgeGame();
    expect(() => {
      bridgeGame.move(input);
    }).toThrow("[ERROR]");
  });

  test.each([["U"], ["D"]])("move 메서드는 입력값이 유효한 경우 에러 문구를 출력하지 않아야 합니다.", (input) => {
    const bridgeGame = new BridgeGame();
    expect(() => {
      bridgeGame.move(input);
    }).not.toThrow("[ERROR]");
  });

  test.each([["r"], ["q"], ["a"], ["A"]])("validateGameCommand 메서드는 입력값이 유효하지 않은 경우 에러 문구를 출력해야 합니다.", (input) => {
    const bridgeGame = new BridgeGame();
    expect(() => {
      bridgeGame.validateGameCommand(input);
    }).toThrow("[ERROR]");
  });

  test.each([["R"], ["Q"]])("validateGameCommand 메서드는 입력값이 유효한 경우 에러 문구를 출력하지 않아야 합니다.", (input) => {
    const bridgeGame = new BridgeGame();
    expect(() => {
      bridgeGame.validateGameCommand(input);
    }).not.toThrow("[ERROR]");
  });
});
