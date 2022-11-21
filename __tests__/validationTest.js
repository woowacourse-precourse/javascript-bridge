const InputValidator = require("../src/InputValidator");

describe("입력값 유효성 테스트", () => {
  test("입력받은 이동할 칸이 U나 D가 아니면 예외를 발생시킨다.", () => {
    const directions = ["UD", "DU", "S"];

    directions.forEach((direction) => {
      expect(() => InputValidator.checkMoving(direction)).toThrow();
    });
  });

  test("입력받은 이동할 칸이 U나 D이면 예외를 발생시키지 않는다.", () => {
    const directions = ["U", "D"];

    directions.forEach((direction) => {
      expect(() => InputValidator.checkMoving(direction)).not.toThrow();
    });
  });

  test("재시작 여부 입력값이 R이나 Q가 아니면 예외를 발생시킨다.", () => {
    const commands = ["RQ", "S", "ABC"];

    commands.forEach((command) => {
      expect(() => InputValidator.checkGameCommand(command)).toThrow();
    });
  });

  test("재시작 여부 입력값이 R이나 Q이면 예외를 발생시키지 않는다.", () => {
    const commands = ["R", "Q"];

    commands.forEach((command) => {
      expect(() => InputValidator.checkGameCommand(command)).not.toThrow();
    });
  });

  test("입력받은 다리 길이가 숫자가 아니면 예외를 발생시킨다.", () => {
    const sizes = ["twenty", " ", "#"];

    sizes.forEach((size) => {
      expect(() => InputValidator.checkBridgeSize(size)).toThrow();
    });
  });

  test("입력받은 다리 길이가 3~20사이의 숫자가 아니면 예외를 발생시킨다.", () => {
    const sizes = ["0", "23", "2.3"];

    sizes.forEach((size) => {
      expect(() => InputValidator.checkBridgeSize(size)).toThrow();
    });
  });

  test("입력받은 다리 길이가 3~20사이의 숫자이면 예외를 발생시키지 않는다.", () => {
    const sizes = ["3", "20", "19"];

    sizes.forEach((size) => {
      expect(() => InputValidator.checkBridgeSize(size)).not.toThrow();
    });
  });
});
