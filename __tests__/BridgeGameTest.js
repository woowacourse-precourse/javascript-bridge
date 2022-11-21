const BridgeGame = require("../src/BridgeGame");
const Validation = require("../src/utils/Validation");
const Constant = require("../src/constant/Constant");
const { ERROR_MESSAGE } = Constant;

describe("도메인 기능(BridgeGame) 유닛테스트", () => {
  test("BridgeGame 시작후 U,D를 제외한 다른 입력값은 예외처리", () => {
    const userInput = "k";

    expect(() => Validation.isBridgeWords(userInput)).toThrow(
      ERROR_MESSAGE.IS_BRIDGE_WORDS
    );
  });

  test("BridgeGame move method테스트, 값을 제대로 넣으면 true를 리턴", () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.bridge = ["U", "D", "U"];
    expect(bridgeGame.move("U")).toBe(true);
  });

  test("BridgeGame move method테스트, 잘못된 값일시 false를 리턴", () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.bridge = ["U", "D", "U"];
    expect(bridgeGame.move("D")).toBe(false);
  });

  test("BridgeGame retry method테스트", () => {
    const bridgeGame = new BridgeGame();
    expect(bridgeGame.retry("R")).toBe("R");
  });

  test("BridgeGame retry method테스트", () => {
    const bridgeGame = new BridgeGame();
    expect(bridgeGame.retry("Q")).toBe("Q");
  });
});
