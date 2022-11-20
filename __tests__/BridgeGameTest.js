// const BridgeGame = require("../src/BridgeGame");
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
});
