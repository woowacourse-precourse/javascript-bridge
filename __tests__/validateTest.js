const Validate = require("../src/Validate");
const { SPACE_TO_MOVE, GAME_COMMAND } = require("../src/Utils");

describe("사용자에게 입력받는 값들의 테스트", () => {
  test.each([21, 50, 100]) ("다리 길이가 20보다 크면 예외가 발생한다.", (size) => {
    expect(() => {
      Validate.validateBridgeLength(size);
    }).toThrow("[ERROR]");
  });

  test.each([0, 2, -100]) ("다리 길이가 3보다 작으면 예외가 발생한다.", (size) => {
    expect(() => {
      Validate.validateBridgeLength(size);
    }).toThrow("[ERROR]");
  });

  test("다리 길이에 숫자가 아닌 값을 입력하면 예외가 발생한다.", () => {
    expect(() => {
      Validate.validateBridgeLength(NaN);
    }).toThrow("[ERROR]");
  });

  test("다리 길이가 3에서 20 사이의 숫자이면 성공한다.", () => {
    expect(
      String(Validate.validateBridgeLength(3))
    ).toMatch(/^[1-9]{1}$|^[1]{1}[0-9]{1}$|^20/);
  });

  test.each([1, " ", "P"]) ("이동할 칸의 입력이 U 또는 D가 아니면 예외가 발생한다.", (move) => {
    expect(() => {
      Validate.validateMoving(move);
    }).toThrow("[ERROR]");
  });

  test("이동할 칸의 입력이 U 또는 D이면 성공한다.", () => {
    expect(
      Validate.validateMoving("U")
    ).toBe(SPACE_TO_MOVE.MOVE_UP);
  });

  test("이동할 칸의 입력이 U 또는 D이면 성공한다.", () => {
    expect(
      Validate.validateMoving("D")
    ).toBe(SPACE_TO_MOVE.MOVE_DOWN);
  });

  test.each([1, "", "P"]) ("게임 재시작/종료시 입력 값이 R 또는 Q가 아니면 예외가 발생한다", (command) => {
    expect(() => {
      Validate.ValidateCommand(command);
    }).toThrow("[ERROR]");
  });

  test("게임 재시작/종료시 입력 값이 R 또는 Q이면 성공한다.", () => {
    expect(
      Validate.ValidateCommand("R")
    ).toBe(GAME_COMMAND.GAME_RETRY);
  });

  test.each(["R", "Q"]) ("게임 재시작/종료시 입력 값이 R 또는 Q이면 성공한다.", (command) => {
    expect(
      Validate.ValidateCommand("Q")
    ).toBe(GAME_COMMAND.GAME_END);
  });
})

