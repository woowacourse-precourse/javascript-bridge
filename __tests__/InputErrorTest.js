const InputView = require("../src/InputView");
const BridgeGame = require("./BridgeGame");

describe("입력값 유효성 검사 테스트", () => {
  const bridgeGame = new BridgeGame();
  test("다리 길이가 숫자가 아니면 오류가 발생한다.", () => {
    expect(() => {
      InputView.readBridgeSize(bridgeGame);
    }).toThrow("[ERROR]");
  });
  test("다리 길이가 3~20의 범위를 벗어나면 오류가 발생한다.", () => {
    expect(() => {
      InputView.readBridgeSize(bridgeGame);
    }).toThrow("[ERROR]");
  });
});
