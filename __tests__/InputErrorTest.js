const BridgeMaker = require("../src/BridgeMaker");
const BridgeGame = require("../src/BridgeGame");
const { ERROR } = require("../src/Constant/Constant");

describe("에러 테스트 ", () => {
  test("BridgeSize 입력 테스트", () => {
    const errorInputs = ["2", "0", "21", "-5", "6.3"];
    const errorMessage = ERROR.NOTr;
    const boundarys = ["3", "20"];

    errorInputs.forEach((input) => {
      expect(() => {
        BridgeMaker.canMakeBridge(Number(input));
      }).toThrow(errorMessage);
    });

    boundarys.forEach((boundary) => {
      expect(() => {
        BridgeMaker.canMakeBridge(Number(boundary));
      }).not.toThrow();
    });
  });

  test("U/D 입력 테스트", () => {
    const errorInputs = ["u", "UU", "유", "UD"];
    const errorMessage = ERROR.NOT_UD;
    const correctInputs = ["U", "D"];
    const bridgeGame = new BridgeGame(["U", "U", "U"]);

    errorInputs.forEach((input) => {
      expect(() => {
        bridgeGame.canMove(input);
      }).toThrow(errorMessage);
    });

    correctInputs.forEach((input) => {
      expect(() => {
        bridgeGame.canMove(input);
      }).not.toThrow();
    });
  });

  test("R/Q 입력 테스트", () => {
    const errorInputs = ["RR", "QQ", "RQ"];
    const errorMessage = ERROR.NOT_RQ;
    const correctInputs = ["R", "Q"];
    const bridgeGame = new BridgeGame(["U", "U", "U"]);

    errorInputs.forEach((input) => {
      expect(() => {
        bridgeGame.isRetry(input);
      }).toThrow(errorMessage);
    });

    correctInputs.forEach((input) => {
      expect(() => {
        bridgeGame.isRetry(input);
      }).not.toThrow();
    });
  });
});
