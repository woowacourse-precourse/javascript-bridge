const BridgeMaker = require("../src/BridgeMaker");
const BridgeGame = require("../src/BridgeGame");

describe("에러 테스트 ", () => {
  test("BridgeSize 입력 테스트", () => {
    const errorInputs = ["2", "0", "21", "-5", "6.3"];
    const errorMessage = "[ERROR] 3과 20사이의 자연수를 입력해주세요.";
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
    const errorMessage = "[ERROR] 유효한 값(U or D)를 입력해주세요.";
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
    const errorMessage = "[ERROR] 유효한 값(R or Q)를 입력해주세요.";
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
