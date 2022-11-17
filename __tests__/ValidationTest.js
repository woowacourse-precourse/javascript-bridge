const Validation = require("../src/Validation");

describe("입력값 유효성 검사 테스트", () => {
  test("다리 사이즈 입력 유효성 검사", () => {
    const inputBridgeSize = {
      correct: ["3", "11", "15", "20"],
      incorrect: ["abc", "   ", "", "1", "100"],
    };

    inputBridgeSize.correct.forEach((bridgeSize) => {
      expect(Validation.bridgeSize(bridgeSize)).toBeUndefined();
    });
    inputBridgeSize.incorrect.forEach((bridgeSize) => {
      expect(() => Validation.bridgeSize(bridgeSize)).toThrow();
    });
  });

  test("이동할 칸 입력 유효성 검사", () => {
    const inputMovingCommand = {
      correct: ["U", "D"],
      incorrect: ["u", "   ", "", "d", "100"],
    };

    inputMovingCommand.correct.forEach((bridgeSize) => {
      expect(Validation.movingCommand(bridgeSize)).toBeUndefined();
    });
    inputMovingCommand.incorrect.forEach((bridgeSize) => {
      expect(() => Validation.movingCommand(bridgeSize)).toThrow();
    });
  });

  test("게임 재시작 여부 입력 유효성 검사", () => {
    const inputGameCommand = {
      correct: ["R", "Q"],
      incorrect: ["r", "   ", "", "q", "100"],
    };

    inputGameCommand.correct.forEach((bridgeSize) => {
      expect(Validation.gameCommand(bridgeSize)).toBeUndefined();
    });
    inputGameCommand.incorrect.forEach((bridgeSize) => {
      expect(() => Validation.gameCommand(bridgeSize)).toThrow();
    });
  });
});
